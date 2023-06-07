/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
  /** Todo id */
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

export type QueryQuestionnairesArgs = {
  page?: InputMaybe<Scalars["Int"]>;
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

export type GetQuestionnaireQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetQuestionnaireQuery = {
  __typename?: "Query";
  questionnaire?:
    | ({ __typename?: "Questionnaire" } & {
        " $fragmentRefs"?: {
          QuestionnaireDetailFragmentFragment: QuestionnaireDetailFragmentFragment;
        };
      })
    | null;
};

export type QuestionnairesPageQueryQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
}>;

export type QuestionnairesPageQueryQuery = {
  __typename?: "Query";
  questionnaireConnection: {
    __typename?: "QueryQuestionnaireConnection_Connection";
    totalCount: number;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
      endCursor?: string | null;
    };
    edges: Array<{
      __typename?: "QuestionnaireEdge";
      cursor: string;
      node: { __typename?: "Questionnaire" } & {
        " $fragmentRefs"?: { QuestionnaireFragment: QuestionnaireFragment };
      };
    }>;
  };
};

export type CreateQuestionnaireMutationVariables = Exact<{
  questionnaire: CreateQuestionnaireInput;
}>;

export type CreateQuestionnaireMutation = {
  __typename?: "Mutation";
  createQuestionnaire?: {
    __typename?: "CreateQuestionnairePayload";
    questionnaire?: {
      __typename?: "Questionnaire";
      id: number;
      title: string;
      description: string;
      state: number;
      startAt: any;
      endAt: any;
    } | null;
  } | null;
};

export type GetCommentsQueryVariables = Exact<{
  postId: Scalars["Int"];
}>;

export type GetCommentsQuery = {
  __typename?: "Query";
  comments: Array<{
    __typename?: "Comment";
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
  } | null>;
};

export type PostFragment = {
  __typename?: "Post";
  id: number;
  userId: number;
  title: string;
  body: string;
} & { " $fragmentName"?: "PostFragment" };

export type GetPostConnectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  query?: InputMaybe<Scalars["String"]>;
}>;

export type GetPostConnectionQuery = {
  __typename?: "Query";
  postConnection: {
    __typename?: "QueryPostConnection_Connection";
    totalCount: number;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
      endCursor?: string | null;
    };
    edges: Array<{
      __typename?: "PostEdge";
      cursor: string;
      node: { __typename?: "Post" } & { " $fragmentRefs"?: { PostFragment: PostFragment } };
    }>;
  };
};

export type QuestionnaireFragment = {
  __typename?: "Questionnaire";
  id: number;
  title: string;
  description: string;
  state: number;
  startAt: any;
  endAt: any;
  questions: Array<{ __typename?: "Question"; id: number } | null>;
} & { " $fragmentName"?: "QuestionnaireFragment" };

export type CancelToDeleteQuestionnaireMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type CancelToDeleteQuestionnaireMutation = {
  __typename?: "Mutation";
  cancelToDeleteQuestionnaire?: {
    __typename?: "CancelToDeleteQuestionnairePayload";
    questionnaire?:
      | ({ __typename?: "Questionnaire" } & {
          " $fragmentRefs"?: { QuestionnaireFragment: QuestionnaireFragment };
        })
      | null;
  } | null;
};

export type DeleteQuestionnaireMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteQuestionnaireMutation = {
  __typename?: "Mutation";
  deleteQuestionnaire?: {
    __typename?: "DeleteQuestionnairePayload";
    id?: number | null;
    result?: boolean | null;
  } | null;
};

export type QuestionnaireConnectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
}>;

export type QuestionnaireConnectionQuery = {
  __typename?: "Query";
  questionnaireConnection: {
    __typename?: "QueryQuestionnaireConnection_Connection";
    totalCount: number;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
      endCursor?: string | null;
    };
    edges: Array<{
      __typename?: "QuestionnaireEdge";
      cursor: string;
      node: { __typename?: "Questionnaire" } & {
        " $fragmentRefs"?: { QuestionnaireFragment: QuestionnaireFragment };
      };
    }>;
  };
};

export type OptionFragmentFragment = { __typename?: "Option"; id: number; text: string } & {
  " $fragmentName"?: "OptionFragmentFragment";
};

export type QuestionFragmentFragment = {
  __typename?: "Question";
  id: number;
  type: QuestionType;
  text: string;
  options: Array<
    | ({ __typename?: "Option" } & {
        " $fragmentRefs"?: { OptionFragmentFragment: OptionFragmentFragment };
      })
    | null
  >;
} & { " $fragmentName"?: "QuestionFragmentFragment" };

export type QuestionnaireDetailFragmentFragment = {
  __typename?: "Questionnaire";
  id: number;
  title: string;
  description: string;
  state: number;
  startAt: any;
  endAt: any;
  questions: Array<
    | ({ __typename?: "Question" } & {
        " $fragmentRefs"?: { QuestionFragmentFragment: QuestionFragmentFragment };
      })
    | null
  >;
} & { " $fragmentName"?: "QuestionnaireDetailFragmentFragment" };

export const PostFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Post" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostFragment, unknown>;
export const QuestionnaireFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Questionnaire" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Questionnaire" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "state" } },
          { kind: "Field", name: { kind: "Name", value: "startAt" } },
          { kind: "Field", name: { kind: "Name", value: "endAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "questions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuestionnaireFragment, unknown>;
export const OptionFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OptionFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Option" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OptionFragmentFragment, unknown>;
export const QuestionFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "options" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OptionFragment" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OptionFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Option" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuestionFragmentFragment, unknown>;
export const QuestionnaireDetailFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionnaireDetailFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Questionnaire" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "state" } },
          { kind: "Field", name: { kind: "Name", value: "startAt" } },
          { kind: "Field", name: { kind: "Name", value: "endAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "questions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "QuestionFragment" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OptionFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Option" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "options" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OptionFragment" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuestionnaireDetailFragmentFragment, unknown>;
export const GetQuestionnaireDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetQuestionnaire" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "questionnaire" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "QuestionnaireDetailFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OptionFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Option" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "options" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OptionFragment" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionnaireDetailFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Questionnaire" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "state" } },
          { kind: "Field", name: { kind: "Name", value: "startAt" } },
          { kind: "Field", name: { kind: "Name", value: "endAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "questions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "QuestionFragment" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>;
export const QuestionnairesPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuestionnairesPageQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "questionnaireConnection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "totalCount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
                      { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
                      { kind: "Field", name: { kind: "Name", value: "startCursor" } },
                      { kind: "Field", name: { kind: "Name", value: "endCursor" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "cursor" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "Questionnaire" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Questionnaire" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Questionnaire" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "state" } },
          { kind: "Field", name: { kind: "Name", value: "startAt" } },
          { kind: "Field", name: { kind: "Name", value: "endAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "questions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuestionnairesPageQueryQuery, QuestionnairesPageQueryQueryVariables>;
export const CreateQuestionnaireDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateQuestionnaire" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "questionnaire" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CreateQuestionnaireInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createQuestionnaire" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "questionnaire" },
                value: { kind: "Variable", name: { kind: "Name", value: "questionnaire" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "questionnaire" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                      { kind: "Field", name: { kind: "Name", value: "state" } },
                      { kind: "Field", name: { kind: "Name", value: "startAt" } },
                      { kind: "Field", name: { kind: "Name", value: "endAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>;
export const GetCommentsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetComments" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "postId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "comments" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "postId" },
                value: { kind: "Variable", name: { kind: "Name", value: "postId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "postId" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetPostConnectionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPostConnection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "query" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postConnection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "query" },
                value: { kind: "Variable", name: { kind: "Name", value: "query" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
                      { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
                      { kind: "Field", name: { kind: "Name", value: "startCursor" } },
                      { kind: "Field", name: { kind: "Name", value: "endCursor" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "totalCount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "Post" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "cursor" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Post" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostConnectionQuery, GetPostConnectionQueryVariables>;
export const CancelToDeleteQuestionnaireDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CancelToDeleteQuestionnaire" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cancelToDeleteQuestionnaire" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "questionnaire" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "Questionnaire" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Questionnaire" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Questionnaire" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "state" } },
          { kind: "Field", name: { kind: "Name", value: "startAt" } },
          { kind: "Field", name: { kind: "Name", value: "endAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "questions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CancelToDeleteQuestionnaireMutation,
  CancelToDeleteQuestionnaireMutationVariables
>;
export const DeleteQuestionnaireDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteQuestionnaire" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteQuestionnaire" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>;
export const QuestionnaireConnectionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuestionnaireConnection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "questionnaireConnection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "totalCount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
                      { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
                      { kind: "Field", name: { kind: "Name", value: "startCursor" } },
                      { kind: "Field", name: { kind: "Name", value: "endCursor" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "cursor" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "Questionnaire" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Questionnaire" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Questionnaire" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "state" } },
          { kind: "Field", name: { kind: "Name", value: "startAt" } },
          { kind: "Field", name: { kind: "Name", value: "endAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "questions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuestionnaireConnectionQuery, QuestionnaireConnectionQueryVariables>;
