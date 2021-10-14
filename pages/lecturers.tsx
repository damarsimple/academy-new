import gql from "graphql-tag";
import * as React from "react";
import Layout from "../components/Layout";
import TableLoader from "../components/TableLoader";
import { Lecturer } from "../types/type";

export default function Index() {
  return (
    <Layout>
      <TableLoader<Lecturer>
        fields="lecturers"
        getQuery={gql`
          query GetLecturers($first: Int!, $after: String) {
            lecturers(first: $first, after: $after) {
              edges {
                cursor
                node {
                  id
                  name
                  created_at
                  updated_at
                  nidn
                  doctor_degree
                  magister_degree
                  academic_job
                  specialty
                  education_certificate_number
                  is_ps_competent
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                total
              }
            }
          }
        `}
        columns={[
          { field: "id", headerName: "ID", flex: 1 },
          { field: "name", headerName: "Nama", flex: 1, editable: false },
          { field: "nidn", headerName: "NIDN", flex: 1, editable: false },
          {
            field: "doctor_degree",
            headerName: "S3",
            flex: 1,
            editable: false,
          },
          {
            field: "magister_degree",
            headerName: "S2",
            flex: 1,
            editable: false,
          },
          {
            field: "academic_job",
            headerName: "Job Akademis",
            flex: 1,
            editable: false,
          },
          {
            field: "specialty",
            headerName: "Specialty",
            flex: 1,
            editable: false,
          },
          {
            field: "education_certificate_number",
            headerName: "Nomor Sertifikat Edukasi",
            flex: 1,
            editable: false,
            type: "number",
          },
          {
            field: "is_ps_competent",
            headerName: "Kompetensi",
            flex: 1,
            editable: false,
            type: "boolean",
          },
          { field: "updated_at", headerName: "Update Pada", flex: 1 },
          { field: "created_at", headerName: "Dibuat Pada", flex: 1 },
        ]}
        label="Dosen"
        actions={["delete", "edit", "create"]}
        createQuery={gql`
          mutation Mutation($input: CreateLecturerInput!) {
            createLecturer(input: $input) {
              name
              id
              created_at
              updated_at
              nidn
              doctor_degree
              magister_degree
              academic_job
              specialty
              education_certificate_number
              is_ps_competent
            }
          }
        `}
        updateQuery={gql`
          mutation Mutation($id: ID!, $input: CreateLecturerInput!) {
            updateLecturer(id: $id, input: $input) {
              name
              id
              created_at
              updated_at
              nidn
              doctor_degree
              magister_degree
              academic_job
              specialty
              education_certificate_number
              is_ps_competent
            }
          }
        `}
        deleteQuery={gql`
          mutation Mutation($id: ID!) {
            deleteLecturer(id: $id) {
              is_ps_competent
            }
          }
        `}
      />
    </Layout>
  );
}
