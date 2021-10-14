import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DataGrid,
  GridApi,
  GridCellValue,
  GridColDef,
  GridSortModel,
  GridToolbar,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grow,
  Modal,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { DocumentNode, gql, useMutation, useQuery } from "@apollo/client";
import { PageInfo } from "../types/type";
import { get } from "lodash";
import { coerceInputValue } from "graphql";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Action = "edit" | "delete" | "create";

interface TableColumnDefinition<T> extends Omit<GridColDef, "field"> {
  field: keyof T;
}

export interface ConnectionNode<T> {
  node: T;
  cursor: string;
}

export interface ConnectionData<T> {
  pageInfo: PageInfo;
  edges: ConnectionNode<T>[];
}

export default function TableLoader<T>({
  columns,
  label,
  actions,
  getQuery,
  updateQuery,
  deleteQuery,
  createQuery,
  fields,
}: {
  columns: TableColumnDefinition<T>[];
  label: string;
  fields: string;
  actions?: Array<Action>;
  getQuery: DocumentNode;
  createQuery: DocumentNode;
  updateQuery: DocumentNode;
  deleteQuery: DocumentNode;
}) {
  const [pageSize, setPageSize] = React.useState<number>(10);

  const { data, loading, error, refetch } = useQuery(getQuery, {
    variables: {
      first: pageSize,
      after: "",
    },
  });

  const [handleCreate] = useMutation(createQuery);
  const [handleUpdate] = useMutation(updateQuery);
  const [handleDelete] = useMutation(deleteQuery);

  const dataFields: ConnectionData<T> = get(data, fields);
  const [page, setPage] = useState(1);
  const { edges, pageInfo } = dataFields || {};
  const [sortModel, setSortModel] = React.useState<GridSortModel>([]);

  const [openModal, setOpenModal] = useState(false);

  const definedColumns = columns.map((e) => ({ ...e, flex: 1 }));
  //@ts-ignore
  const editable = definedColumns.filter((e) => typeof e.editable == "boolean");
  //@ts-ignore
  const editableFields: string[] = editable.map((e) => e.field);

  const actionColumn: GridColDef[] = [
    {
      field: "edit",
      headerName: "Edit",
      type: "number",
      flex: 1,
      sortable: false,
      filterable: false,
      disableExport: true,
      renderCell: (params: GridRenderCellParams) => {
        const [onEdit, setOnEdit] = useState(false);

        const setEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;

          editableFields.reverse().forEach((e) => {
            if (editableFields[0] == e) {
              api.setCellFocus(params.id, e);
            }
            api.setCellMode(params.id, e, "edit");
          });

          setOnEdit(!onEdit);
        };

        const setSaveMode = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;

          // api.setRowMode(params.id, "view");
          const data = {};

          editableFields.forEach((e) => {
            try {
              api.commitCellChange({
                field: e,
                id: params.id,
              });
            } catch (error) {}
          });
          editableFields.forEach((e) => {
            //@ts-ignore
            data[e] = api.getCellValue(params.id, e);
            api.setCellMode(params.id, e, "view");
          });

          setOnEdit(!onEdit);

          refetch();

          handleUpdate({
            variables: {
              id: params.id,
              input: data,
            },
          }).then(() => {
            toast.success(`Berhasil mengedit data ${label}`);
            refetch();
          });
        };

        return onEdit ? (
          <Button
            startIcon={<SaveIcon />}
            variant="contained"
            onClick={setSaveMode}
          >
            Save
          </Button>
        ) : (
          <Button
            startIcon={<EditIcon />}
            variant="contained"
            onClick={setEditMode}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "number",
      flex: 1,
      filterable: false,
      sortable: false,
      disableExport: true,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking
          handleDelete({
            variables: {
              id: params.id,
            },
          }).then(() => {
            toast.info(`Berhasil menghapus ${label} id ${params.id}`);
            refetch();
          });
          return;
        };

        return (
          <Button
            startIcon={<DeleteIcon />}
            variant="contained"
            onClick={onClick}
            color="error"
          >
            Delete
          </Button>
        );
      },
    },
  ];
  //@ts-ignore
  const compiledColumns: GridColDef[] = [
    ...definedColumns,
    ...actionColumn.filter((e) => actions?.includes(e.field as Action)),
  ];
  return (
    <>
      {error && error.message}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grow in={openModal}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <form
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = {};
                  editable.forEach((x) => {
                    if (x.type == "boolean") {
                      //@ts-ignore
                      data[x.field] = e.target[x.field as string].checked;
                    } else {
                      //@ts-ignore
                      data[x.field] = e.target[x.field as string].value;
                    }
                  });
                  handleCreate({
                    variables: {
                      input: data,
                    },
                  }).then(() => refetch());
                  setOpenModal(false);
                }}
              >
                {editable.map((e) => {
                  switch (e.type) {
                    case "boolean":
                      return (
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox name={e.field as string} />}
                            label={e.headerName}
                          />
                        </FormGroup>
                      );

                    default:
                      return (
                        <TextField
                          sx={{ width: "100%" }}
                          label={e.headerName}
                          //@ts-ignore
                          name={e.field as string}
                          variant="outlined"
                        />
                      );
                  }
                })}
                <Button
                  sx={{ width: "100%" }}
                  startIcon={<SaveIcon />}
                  variant="contained"
                  type="submit"
                >
                  Save
                </Button>
              </form>
            </Box>
          </Grow>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginY: 2,
        }}
      >
        <Typography variant="h6" noWrap component="div">
          {label}
        </Typography>

        {actions?.includes("create") && (
          <Button variant="contained" onClick={() => setOpenModal(true)}>
            Buat {label} Baru
          </Button>
        )}
      </Box>

      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rowCount={pageInfo?.total ?? 0}
          rows={edges?.map((e) => e.node) ?? []}
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model)}
          columns={compiledColumns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onPageChange={(newPage) => {
            const newVar = {
              first: pageSize,
              after:
                page > newPage
                  ? pageInfo.startCursor ?? ""
                  : pageInfo.endCursor ?? "",
            };
            refetch(newVar);
            setPage(page > newPage ? 1 : newPage);
          }}
          rowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          components={{
            Toolbar: GridToolbar,
          }}
          filterMode="server"
          paginationMode="server"
          onFilterModelChange={(e, d) => {
            console.log(e.items);
            console.log(d);
          }}
          loading={loading}
        />
      </div>
    </>
  );
}
