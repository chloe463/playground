export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type CancelToDeleteQuestionnairePayload = {
  __typename?: "CancelToDeleteQuestionnairePayload";
  questionnaire?: Maybe<Questionnaire>;
};

export type Comment = {
  __typename?: "Comment";
  id: Scalars["Int"];
  postId: Scalars["Int"];
  name: Scalars["String"];
  email: Scalars["String"];
  body: Scalars["String"];
};

export type CreateOptionInput = {
  text: Scalars["String"];
};

export type CreateQuestionInput = {
  text: Scalars["String"];
  type: Scalars["Int"];
  required: Scalars["Boolean"];
  options?: Maybe<Array<Maybe<CreateOptionInput>>>;
};

export type CreateQuestionnaireInput = {
  title: Scalars["String"];
  description: Scalars["String"];
  state?: Maybe<Scalars["Int"]>;
  startAt: Scalars["DateTime"];
  endAt: Scalars["DateTime"];
  questions?: Maybe<Array<Maybe<CreateQuestionInput>>>;
};

export type CreateQuestionnairePayload = {
  __typename?: "CreateQuestionnairePayload";
  questionnaire?: Maybe<Questionnaire>;
};

export type DeleteQuestionnaireInput = {
  id: Scalars["Int"];
};

export type DeleteQuestionnairePayload = {
  __typename?: "DeleteQuestionnairePayload";
  id?: Maybe<Scalars["Int"]>;
  result?: Maybe<Scalars["Boolean"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createQuestionnaire?: Maybe<CreateQuestionnairePayload>;
  deleteQuestionnaire?: Maybe<DeleteQuestionnairePayload>;
  cancelToDeleteQuestionnaire?: Maybe<CancelToDeleteQuestionnairePayload>;
  updateQuestionnaire?: Maybe<UpdateQuestionnairePayload>;
};

export type MutationCreateQuestionnaireArgs = {
  questionnaire?: Maybe<CreateQuestionnaireInput>;
};

export type MutationDeleteQuestionnaireArgs = {
  id: Scalars["Int"];
};

export type MutationCancelToDeleteQuestionnaireArgs = {
  id: Scalars["Int"];
};

export type MutationUpdateQuestionnaireArgs = {
  questionnaire: UpdateQuestionnaireInput;
};

export type Option = {
  __typename?: "Option";
  id: Scalars["Int"];
  text: Scalars["String"];
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: "PageInfo";
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars["Boolean"];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars["Boolean"];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars["String"]>;
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars["String"]>;
};

export type Post = {
  __typename?: "Post";
  id: Scalars["Int"];
  userId: Scalars["Int"];
  title: Scalars["String"];
  body: Scalars["String"];
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
};

export type QueryCommentsArgs = {
  postId: Scalars["Int"];
};

export type QueryPostConnectionArgs = {
  query?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
};

export type QueryPostsArgs = {
  start?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryQuestionnaireArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryQuestionnaireConnectionArgs = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
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

export type Question = {
  __typename?: "Question";
  id: Scalars["Int"];
  type: Scalars["Int"];
  text: Scalars["String"];
  options: Array<Maybe<Option>>;
};

export type Questionnaire = {
  __typename?: "Questionnaire";
  id: Scalars["Int"];
  title: Scalars["String"];
  description: Scalars["String"];
  state: Scalars["Int"];
  startAt: Scalars["DateTime"];
  endAt: Scalars["DateTime"];
  questions: Array<Maybe<Question>>;
};

export type QuestionnaireEdge = {
  __typename?: "QuestionnaireEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Questionnaire;
};

export type UpdateOptionInput = {
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
};

export type UpdateQuestionInput = {
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["Int"]>;
  required?: Maybe<Scalars["Boolean"]>;
  options?: Maybe<Array<Maybe<UpdateOptionInput>>>;
};

export type UpdateQuestionnaireInput = {
  id: Scalars["Int"];
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["Int"]>;
  startAt?: Maybe<Scalars["DateTime"]>;
  endAt?: Maybe<Scalars["DateTime"]>;
  questions?: Maybe<Array<Maybe<UpdateQuestionInput>>>;
};

export type UpdateQuestionnairePayload = {
  __typename?: "UpdateQuestionnairePayload";
  questionnaire?: Maybe<Questionnaire>;
};
