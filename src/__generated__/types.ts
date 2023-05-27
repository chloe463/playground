export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  TodoId: any;
};

export type CancelToDeleteQuestionnairePayload = {
  __typename?: "CancelToDeleteQuestionnairePayload";
  questionnaire?: Maybe<Questionnaire>;
};

export type Comment = {
  __typename?: "Comment";
  body: Scalars["String"];
  email: Scalars["String"];
  id: Scalars["Int"];
  name: Scalars["String"];
  postId: Scalars["Int"];
};

export type CreateOptionInput = {
  text: Scalars["String"];
};

export type CreateQuestionInput = {
  options?: InputMaybe<Array<InputMaybe<CreateOptionInput>>>;
  required: Scalars["Boolean"];
  text: Scalars["String"];
  type: Scalars["Int"];
};

export type CreateQuestionnaireInput = {
  description: Scalars["String"];
  endAt: Scalars["DateTime"];
  questions?: InputMaybe<Array<InputMaybe<CreateQuestionInput>>>;
  startAt: Scalars["DateTime"];
  state?: InputMaybe<Scalars["Int"]>;
  title: Scalars["String"];
};

export type CreateQuestionnairePayload = {
  __typename?: "CreateQuestionnairePayload";
  questionnaire?: Maybe<Questionnaire>;
};

export type CreateTodoInput = {
  task: Scalars["String"];
};

export type CreateTodoPayload = {
  __typename?: "CreateTodoPayload";
  todo?: Maybe<Todo>;
};

export type DeleteQuestionnaireInput = {
  id: Scalars["Int"];
};

export type DeleteQuestionnairePayload = {
  __typename?: "DeleteQuestionnairePayload";
  id?: Maybe<Scalars["Int"]>;
  result?: Maybe<Scalars["Boolean"]>;
};

export type DeleteTodoPayload = {
  __typename?: "DeleteTodoPayload";
  id?: Maybe<Scalars["TodoId"]>;
  result?: Maybe<Scalars["Boolean"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  cancelToDeleteQuestionnaire?: Maybe<CancelToDeleteQuestionnairePayload>;
  createQuestionnaire?: Maybe<CreateQuestionnairePayload>;
  createTodo?: Maybe<CreateTodoPayload>;
  deleteQuestionnaire?: Maybe<DeleteQuestionnairePayload>;
  deleteTodo?: Maybe<DeleteTodoPayload>;
  updateQuestionnaire?: Maybe<UpdateQuestionnairePayload>;
  updateTodo?: Maybe<UpdateTodoPayload>;
};

export type MutationCancelToDeleteQuestionnaireArgs = {
  id: Scalars["Int"];
};

export type MutationCreateQuestionnaireArgs = {
  questionnaire?: InputMaybe<CreateQuestionnaireInput>;
};

export type MutationCreateTodoArgs = {
  todo?: InputMaybe<CreateTodoInput>;
};

export type MutationDeleteQuestionnaireArgs = {
  id: Scalars["Int"];
};

export type MutationDeleteTodoArgs = {
  id: Scalars["TodoId"];
};

export type MutationUpdateQuestionnaireArgs = {
  questionnaire: UpdateQuestionnaireInput;
};

export type MutationUpdateTodoArgs = {
  todo: UpdateTodoInput;
};

export type Option = {
  __typename?: "Option";
  id: Scalars["Int"];
  text: Scalars["String"];
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: "PageInfo";
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars["String"]>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars["Boolean"];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars["Boolean"];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Post = {
  __typename?: "Post";
  body: Scalars["String"];
  id: Scalars["Int"];
  title: Scalars["String"];
  userId: Scalars["Int"];
};

export type PostEdge = {
  __typename?: "PostEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Post;
};

export type Query = {
  __typename?: "Query";
  comments: Array<Maybe<Comment>>;
  postConnection: QueryPostConnection_Connection;
  posts?: Maybe<Array<Maybe<Post>>>;
  questionnaire?: Maybe<Questionnaire>;
  questionnaireConnection: QueryQuestionnaireConnection_Connection;
  questionnaires?: Maybe<Array<Maybe<Questionnaire>>>;
  todoConnection: QueryTodoConnection_Connection;
};

export type QueryCommentsArgs = {
  postId: Scalars["Int"];
};

export type QueryPostConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
};

export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["String"]>;
};

export type QueryQuestionnaireArgs = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type QueryQuestionnaireConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryTodoConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryPostConnection_Connection = {
  __typename?: "QueryPostConnection_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<PostEdge>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type QueryQuestionnaireConnection_Connection = {
  __typename?: "QueryQuestionnaireConnection_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<QuestionnaireEdge>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type QueryTodoConnection_Connection = {
  __typename?: "QueryTodoConnection_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<TodoEdge>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Question = {
  __typename?: "Question";
  id: Scalars["Int"];
  options: Array<Maybe<Option>>;
  text: Scalars["String"];
  type: QuestionType;
};

export enum QuestionType {
  Checkbox = "CHECKBOX",
  Radio = "RADIO",
  Select = "SELECT",
  Text = "TEXT",
}

export type Questionnaire = {
  __typename?: "Questionnaire";
  description: Scalars["String"];
  endAt: Scalars["DateTime"];
  id: Scalars["Int"];
  questions: Array<Maybe<Question>>;
  startAt: Scalars["DateTime"];
  state: Scalars["Int"];
  title: Scalars["String"];
};

export type QuestionnaireEdge = {
  __typename?: "QuestionnaireEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Questionnaire;
};

export type Todo = {
  __typename?: "Todo";
  createdAt: Scalars["DateTime"];
  finishedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["TodoId"];
  task: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type TodoEdge = {
  __typename?: "TodoEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Todo;
};

export type UpdateOptionInput = {
  id?: InputMaybe<Scalars["Int"]>;
  text?: InputMaybe<Scalars["String"]>;
};

export type UpdateQuestionInput = {
  id?: InputMaybe<Scalars["Int"]>;
  options?: InputMaybe<Array<InputMaybe<UpdateOptionInput>>>;
  required?: InputMaybe<Scalars["Boolean"]>;
  text?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["Int"]>;
};

export type UpdateQuestionnaireInput = {
  description?: InputMaybe<Scalars["String"]>;
  endAt?: InputMaybe<Scalars["DateTime"]>;
  id: Scalars["Int"];
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
  startAt?: InputMaybe<Scalars["DateTime"]>;
  state?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateQuestionnairePayload = {
  __typename?: "UpdateQuestionnairePayload";
  questionnaire?: Maybe<Questionnaire>;
};

export type UpdateTodoInput = {
  finishedAt?: InputMaybe<Scalars["DateTime"]>;
  id: Scalars["TodoId"];
  task?: InputMaybe<Scalars["String"]>;
};

export type UpdateTodoPayload = {
  __typename?: "UpdateTodoPayload";
  todo?: Maybe<Todo>;
};
