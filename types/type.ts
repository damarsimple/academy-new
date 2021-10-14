/* eslint-disable */

// *******************************************************
// *******************************************************
//
// GENERATED FILE, DO NOT MODIFY
//
// Made by Victor Garcia ®
//
// https://github.com/victorgarciaesgi
// *******************************************************
// *******************************************************
// 💙

export type Maybe<T> = T | null;

export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Lecturer {
  name: Maybe<string>;
  id: string;
  created_at: string;
  updated_at: string;
  articles: Article[];
  researches: Research[];
  recognitions: Recognition[];
  nidn: Maybe<string>;
  doctor_degree: Maybe<string>;
  magister_degree: Maybe<string>;
  academic_job: Maybe<string>;
  specialty: Maybe<string>;
  education_certificate_number: Maybe<string>;
  is_ps_competent: Maybe<boolean>;
}

export interface Article {
  title: Maybe<string>;
  id: string;
  created_at: string;
  updated_at: string;
  url: Maybe<string>;
  lecturer: Lecturer;
}

export interface Research {
  title: Maybe<string>;
  id: string;
  created_at: string;
  updated_at: string;
  lecturers: Lecturer[];
  students: Student[];
  theme: string;
  year: string;
  information: Maybe<string>;
}

export interface Student {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
  studyprogram: Maybe<Studyprogram>;
  studentcourses: Maybe<StudentCourse[]>;
  graduation: Maybe<Graduation>;
  nim: string;
  specialty: string;
  is_active: boolean;
  is_foreign: boolean;
  is_fulltime: boolean;
  is_graduated: boolean;
  graduated_at: Maybe<string>;
}

export interface Studyprogram {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
  students: Student[];
  thisyearstudents: Student[];
  type: string;
  accreditation: string;
  code: string;
  expired_at: string;
  lecturer: Lecturer;
}

export interface StudentCourse {
  id: string;
  created_at: string;
  updated_at: string;
  ipk: Maybe<number>;
  finish_at: Maybe<string>;
  student: Student;
  semester: Semester;
  course: Course;
  is_finish: boolean;
}

export interface Semester {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
  year: number;
  studentcourses: StudentCourse[];
  courses: Course[];
}

export interface Course {
  name: Maybe<string>;
  id: string;
  created_at: string;
  updated_at: string;
  semesters: Semester[];
  competency: string;
  code: string;
  responsi_sks_weight: number;
  seminar_sks_weight: number;
  practice_sks_weight: number;
  credit_to_hours_conversion: number;
  must_attitude: boolean;
  must_knowledge: boolean;
  must_skills: boolean;
  must_specialty_skills: boolean;
  lesson_plan_document: string;
  organizing_unit: string;
}

export interface Graduation {
  id: string;
  created_at: string;
  updated_at: string;
  student: Student;
  job_type: string;
  has_job: boolean;
  has_job_at: Maybe<string>;
  is_job_related: boolean;
  year: number;
  start_at: number;
  finish_at: number;
}

export interface Recognition {
  id: string;
  created_at: string;
  updated_at: string;
  lecturer: Lecturer;
  proof: string;
  specialty: string;
  is_international: boolean;
  is_national: boolean;
  is_local: boolean;
  start_at: number;
  finish_at: number;
}

export interface Achievement {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  is_local: boolean;
  is_national: boolean;
  is_international: boolean;
  is_academic: boolean;
  description: string;
  start_at: Maybe<string>;
  finish_at: Maybe<string>;
}

export interface Cooperation {
  title: Maybe<string>;
  id: string;
  created_at: string;
  updated_at: string;
  type: Maybe<string>;
  benefit: string;
  institution_name: string;
  is_international: boolean;
  is_national: boolean;
  is_local: boolean;
  start_at: number;
  finish_at: number;
  proof: string;
}

export interface CourseResearchIntegration {
  id: string;
  created_at: string;
  updated_at: string;
  year: number;
  student: Student;
  research: Research;
  course: Course;
  integration_type: string;
}

export interface Pkm {
  title: string;
  id: string;
  created_at: string;
  updated_at: string;
  lecturers: Lecturer[];
  students: Student[];
  courses: Course[];
  theme: string;
  year: number;
  integration_type: Maybe<string>;
}

export interface Survey {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
  plan: string;
  students: Student[];
}

/** A paginated list of User edges. */
export interface UserConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of User edges.*/
  edges: Maybe<UserEdge[]>;
}

/** Pagination information about the corresponding list of items. */
export interface PageInfo {
  /** When paginating forwards, are there more items?*/
  hasNextPage: boolean;
  /** When paginating backwards, are there more items?*/
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue.*/
  startCursor: Maybe<string>;
  /** When paginating forwards, the cursor to continue.*/
  endCursor: Maybe<string>;
  /** Total number of node in connection.*/
  total: Maybe<number>;
  /** Count of nodes in current request.*/
  count: Maybe<number>;
  /** Current page of request.*/
  currentPage: Maybe<number>;
  /** Last page in connection.*/
  lastPage: Maybe<number>;
}

/** An edge that contains a node of type User and a cursor. */
export interface UserEdge {
  /** The User node.*/
  node: Maybe<User>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** The available SQL operators that are used to filter query results. */
export enum SQLOperator {
  Eq = 'EQ',
  Neq = 'NEQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE',
  Like = 'LIKE',
  Not_like = 'NOT_LIKE',
  In = 'IN',
  Not_in = 'NOT_IN',
  Between = 'BETWEEN',
  Not_between = 'NOT_BETWEEN',
  Is_null = 'IS_NULL',
  Is_not_null = 'IS_NOT_NULL',
}

/** A paginated list of Achievement edges. */
export interface AchievementConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Achievement edges.*/
  edges: Maybe<AchievementEdge[]>;
}

/** An edge that contains a node of type Achievement and a cursor. */
export interface AchievementEdge {
  /** The Achievement node.*/
  node: Maybe<Achievement>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Article edges. */
export interface ArticleConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Article edges.*/
  edges: Maybe<ArticleEdge[]>;
}

/** An edge that contains a node of type Article and a cursor. */
export interface ArticleEdge {
  /** The Article node.*/
  node: Maybe<Article>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Cooperation edges. */
export interface CooperationConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Cooperation edges.*/
  edges: Maybe<CooperationEdge[]>;
}

/** An edge that contains a node of type Cooperation and a cursor. */
export interface CooperationEdge {
  /** The Cooperation node.*/
  node: Maybe<Cooperation>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Course edges. */
export interface CourseConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Course edges.*/
  edges: Maybe<CourseEdge[]>;
}

/** An edge that contains a node of type Course and a cursor. */
export interface CourseEdge {
  /** The Course node.*/
  node: Maybe<Course>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of CourseResearchIntegration edges. */
export interface CourseResearchIntegrationConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of CourseResearchIntegration edges.*/
  edges: Maybe<CourseResearchIntegrationEdge[]>;
}

/** An edge that contains a node of type CourseResearchIntegration and a cursor. */
export interface CourseResearchIntegrationEdge {
  /** The CourseResearchIntegration node.*/
  node: Maybe<CourseResearchIntegration>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Graduation edges. */
export interface GraduationConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Graduation edges.*/
  edges: Maybe<GraduationEdge[]>;
}

/** An edge that contains a node of type Graduation and a cursor. */
export interface GraduationEdge {
  /** The Graduation node.*/
  node: Maybe<Graduation>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Pkm edges. */
export interface PkmConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Pkm edges.*/
  edges: Maybe<PkmEdge[]>;
}

/** An edge that contains a node of type Pkm and a cursor. */
export interface PkmEdge {
  /** The Pkm node.*/
  node: Maybe<Pkm>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Recognition edges. */
export interface RecognitionConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Recognition edges.*/
  edges: Maybe<RecognitionEdge[]>;
}

/** An edge that contains a node of type Recognition and a cursor. */
export interface RecognitionEdge {
  /** The Recognition node.*/
  node: Maybe<Recognition>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Research edges. */
export interface ResearchConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Research edges.*/
  edges: Maybe<ResearchEdge[]>;
}

/** An edge that contains a node of type Research and a cursor. */
export interface ResearchEdge {
  /** The Research node.*/
  node: Maybe<Research>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Student edges. */
export interface StudentConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Student edges.*/
  edges: Maybe<StudentEdge[]>;
}

/** An edge that contains a node of type Student and a cursor. */
export interface StudentEdge {
  /** The Student node.*/
  node: Maybe<Student>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of StudentCourse edges. */
export interface StudentCourseConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of StudentCourse edges.*/
  edges: Maybe<StudentCourseEdge[]>;
}

/** An edge that contains a node of type StudentCourse and a cursor. */
export interface StudentCourseEdge {
  /** The StudentCourse node.*/
  node: Maybe<StudentCourse>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Studyprogram edges. */
export interface StudyprogramConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Studyprogram edges.*/
  edges: Maybe<StudyprogramEdge[]>;
}

/** An edge that contains a node of type Studyprogram and a cursor. */
export interface StudyprogramEdge {
  /** The Studyprogram node.*/
  node: Maybe<Studyprogram>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Survey edges. */
export interface SurveyConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Survey edges.*/
  edges: Maybe<SurveyEdge[]>;
}

/** An edge that contains a node of type Survey and a cursor. */
export interface SurveyEdge {
  /** The Survey node.*/
  node: Maybe<Survey>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of Lecturer edges. */
export interface LecturerConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Lecturer edges.*/
  edges: Maybe<LecturerEdge[]>;
}

/** An edge that contains a node of type Lecturer and a cursor. */
export interface LecturerEdge {
  /** The Lecturer node.*/
  node: Maybe<Lecturer>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

/** A paginated list of StudentSelection edges. */
export interface StudentSelectionConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of StudentSelection edges.*/
  edges: Maybe<StudentSelectionEdge[]>;
}

/** An edge that contains a node of type StudentSelection and a cursor. */
export interface StudentSelectionEdge {
  /** The StudentSelection node.*/
  node: Maybe<StudentSelection>;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

export interface StudentSelection {
  id: string;
  created_at: string;
  updated_at: string;
  year: number;
  student: Student;
  is_accepted: boolean;
  is_regular: boolean;
  is_transfer: boolean;
}

export interface CreateLecturerInput {
  name: string;
  nidn?: string;
  doctor_degree?: string;
  magister_degree?: string;
  specialty?: string;
  academic_job?: string;
  education_certificate_number?: string;
  is_ps_competent?: boolean;
}

export interface CreateAchievementInput {
  name: string;
  is_local?: boolean;
  is_national?: boolean;
  is_international?: boolean;
  is_academic?: boolean;
  description?: string;
  start_at?: string;
  finish_at?: string;
}

export interface StudentResearchActivity {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
  year: number;
  student: Student;
  research: Research;
}

export interface CreateStudentInput {
  studyprogram_id?: string;
  studentcourses?: string[];
  nim: string;
  name: string;
  specialty: string;
  is_active: boolean;
  is_foreign: boolean;
  is_fulltime: boolean;
  is_graduated: boolean;
  graduated_at?: string;
}

export interface CreateGraduationInput {
  student_id: string;
  job_type: string;
  has_job: boolean;
  has_job_at?: string;
  is_job_related: boolean;
  year: number;
  start_at: number;
  finish_at: number;
}

export interface CreateCooperationInput {
  title?: string;
  type?: string;
  benefit: string;
  institution_name: string;
  is_international: boolean;
  is_national: boolean;
  is_local: boolean;
  start_at: number;
  finish_at: number;
  proof: string;
}

export interface CreateCourseInput {
  name: Maybe<string>;
  semesters: Semester[];
  competency: string;
  code: string;
  responsi_sks_weight: number;
  seminar_sks_weight: number;
  practice_sks_weight: number;
  credit_to_hours_conversion: number;
  must_attitude: boolean;
  must_knowledge: boolean;
  must_skills: boolean;
  must_specialty_skills: boolean;
  lesson_plan_document: string;
  organizing_unit: string;
}

export interface UpsertStudentCourseInputHasMany {
  upsert?: UpsertStudentCourseInput[];
  delete?: string[];
  connect?: string[];
  disconnect?: string[];
}

export interface UpsertStudentCourseInput {
  ipk?: number;
  finish_at?: string;
  semester_id: string;
  course_id: string;
  is_finish: boolean;
}

export interface CreateArticleInput {
  lecturer_id: string;
  proof: string;
  specialty: string;
  is_international: boolean;
  is_national: boolean;
  is_local: boolean;
  start_at: number;
  finish_at: number;
}

export interface CreateResearchInput {
  title: string;
  lecturers?: CreateLecturerBelongsToMany;
  student?: CreateStudentBelongsToMany;
  theme: string;
  year: string;
  information?: string;
}

export interface CreateLecturerBelongsToMany {
  upsert?: UpsertLecturerInput[];
  connect?: string[];
  sync?: string[];
}

export interface UpsertLecturerInput {
  id: string;
}

export interface CreateStudentBelongsToMany {
  upsert?: UpsertStudentInput[];
  connect?: string[];
  sync?: string[];
}

export interface UpsertStudentInput {
  id: string;
}

/** The available directions for ordering a list of records. */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}
/** Allows ordering a list of records. */
export interface OrderByClause {
  /** The column that is used for ordering.*/
  column: string;
  /** The direction that is used for ordering.*/
  order: SortOrder;
}

/** Pagination information about the corresponding list of items. */
export interface PaginatorInfo {
  /** Count of available items in the page.*/
  count: number;
  /** Current pagination page.*/
  currentPage: number;
  /** Index of first item in the current page.*/
  firstItem: Maybe<number>;
  /** If collection has more pages.*/
  hasMorePages: boolean;
  /** Index of last item in the current page.*/
  lastItem: Maybe<number>;
  /** Last page number of the collection.*/
  lastPage: number;
  /** Number of items per page in the collection.*/
  perPage: number;
  /** Total items available in the collection.*/
  total: number;
}

/** Pagination information about the corresponding list of items. */
export interface SimplePaginatorInfo {
  /** Count of available items in the page.*/
  count: number;
  /** Current pagination page.*/
  currentPage: number;
  /** Index of first item in the current page.*/
  firstItem: Maybe<number>;
  /** Index of last item in the current page.*/
  lastItem: Maybe<number>;
  /** Number of items per page in the collection.*/
  perPage: number;
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT',
}
/** Dynamic WHERE conditions for queries. */
export interface WhereConditions {
  /** The column that is used for the condition.*/
  column?: string;
  /** @default EQThe operator that is used for the condition.*/
  operator?: SQLOperator;
  /** The value that is used for the condition.*/
  value?: any;
  /** A set of conditions that requires all conditions to match.*/
  AND?: WhereConditions[];
  /** A set of conditions that requires at least one condition to match.*/
  OR?: WhereConditions[];
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied.*/
  HAS?: WhereConditionsRelation;
}

/** Dynamic HAS conditions for WHERE condition queries. */
export interface WhereConditionsRelation {
  /** The relation that is checked.*/
  relation: string;
  /** @default GTEThe comparison operator to test against the amount.*/
  operator?: SQLOperator;
  /** @default 1The amount to test.*/
  amount?: number;
  /** Additional condition logic.*/
  condition?: WhereConditions;
}

export interface userArgs {
  id?: string;
}

export interface lecturerArgs {
  id?: string;
}

export interface achievementArgs {
  id?: string;
}

export interface articleArgs {
  id?: string;
}

export interface cooperationArgs {
  id?: string;
}

export interface courseArgs {
  id?: string;
}

export interface course_research_integrationArgs {
  id?: string;
}

export interface graduationArgs {
  id?: string;
}

export interface pkmArgs {
  id?: string;
}

export interface recognitionArgs {
  id?: string;
}

export interface researchArgs {
  id?: string;
}

export interface semesterArgs {
  id?: string;
}

export interface studentArgs {
  id?: string;
}

export interface student_courseArgs {
  id?: string;
}

export interface studyprogramArgs {
  id?: string;
}

export interface surveyArgs {
  id?: string;
}

export interface usersArgs {
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface achievementsArgs {
  where?: QueryAchievementsWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface articlesArgs {
  where?: QueryArticlesWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface cooperationsArgs {
  where?: QueryCooperationsWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface coursesArgs {
  where?: QueryCoursesWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface course_research_integrationsArgs {
  where?: QueryCourseResearchIntegrationsWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface graduationsArgs {
  where?: QueryGraduationsWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface pkmsArgs {
  where?: QueryPkmsWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface recognitionsArgs {
  where?: QueryRecognitionsWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface researchesArgs {
  where?: QueryResearchesWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface semestersArgs {
  where?: QuerySemestersWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface studentsArgs {
  where?: QueryStudentsWhereWhereConditions;
  is_foreign?: boolean;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface student_coursesArgs {
  where?: QueryStudentCoursesWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface studyprogramsArgs {
  where?: QueryStudyprogramsWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface surveysArgs {
  where?: QuerySurveysWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface lecturersArgs {
  where?: QueryLecturersWhereWhereConditions;
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface student_selectionsArgs {
  /** Limits number of fetched elements.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface createLecturerArgs {
  input: CreateLecturerInput;
}

export interface createAchievementArgs {
  input: CreateAchievementInput;
}

export interface updateLecturerArgs {
  id: string;
  input: CreateLecturerInput;
}

export interface deleteLecturersArgs {
  id: string[];
}
