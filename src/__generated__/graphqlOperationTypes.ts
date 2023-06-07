import * as Types from "./types";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type GetQuestionnaireMetaQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type GetQuestionnaireMetaQuery = {
  __typename?: "Query";
  questionnaire?: {
    __typename?: "Questionnaire";
    id: number;
    title: string;
    description: string;
  } | null;
};

export type GetQuestionnaireQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type GetQuestionnaireQuery = {
  __typename?: "Query";
  questionnaire?: {
    __typename?: "Questionnaire";
    id: number;
    title: string;
    description: string;
    state: number;
    startAt: any;
    endAt: any;
    questions: Array<{
      __typename?: "Question";
      id: number;
      type: Types.QuestionType;
      text: string;
      options: Array<{ __typename?: "Option"; id: number; text: string } | null>;
    } | null>;
  } | null;
};

export type QuestionnairesPageQueryQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars["String"]>;
  before?: Types.InputMaybe<Types.Scalars["String"]>;
  first?: Types.InputMaybe<Types.Scalars["Int"]>;
  last?: Types.InputMaybe<Types.Scalars["Int"]>;
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
      node: {
        __typename?: "Questionnaire";
        id: number;
        title: string;
        description: string;
        state: number;
        startAt: any;
        endAt: any;
        questions: Array<{ __typename?: "Question"; id: number } | null>;
      };
    }>;
  };
};

export type CreateQuestionnaireMutationVariables = Types.Exact<{
  questionnaire: Types.CreateQuestionnaireInput;
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

export type GetCommentsQueryVariables = Types.Exact<{
  postId: Types.Scalars["Int"];
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
};

export type GetPostConnectionQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars["Int"]>;
  after?: Types.InputMaybe<Types.Scalars["String"]>;
  query?: Types.InputMaybe<Types.Scalars["String"]>;
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
      node: { __typename?: "Post"; id: number; userId: number; title: string; body: string };
    }>;
  };
};

export type QuestionnaireListPageInfoFragment = {
  __typename?: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
  endCursor?: string | null;
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
};

export type CancelToDeleteQuestionnaireMutationVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type CancelToDeleteQuestionnaireMutation = {
  __typename?: "Mutation";
  cancelToDeleteQuestionnaire?: {
    __typename?: "CancelToDeleteQuestionnairePayload";
    questionnaire?: {
      __typename?: "Questionnaire";
      id: number;
      title: string;
      description: string;
      state: number;
      startAt: any;
      endAt: any;
      questions: Array<{ __typename?: "Question"; id: number } | null>;
    } | null;
  } | null;
};

export type DeleteQuestionnaireMutationVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type DeleteQuestionnaireMutation = {
  __typename?: "Mutation";
  deleteQuestionnaire?: {
    __typename?: "DeleteQuestionnairePayload";
    id?: number | null;
    result?: boolean | null;
  } | null;
};

export type QuestionnaireConnectionQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars["Int"]>;
  after?: Types.InputMaybe<Types.Scalars["String"]>;
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
      node: {
        __typename?: "Questionnaire";
        id: number;
        title: string;
        description: string;
        state: number;
        startAt: any;
        endAt: any;
        questions: Array<{ __typename?: "Question"; id: number } | null>;
      };
    }>;
  };
};

export type OptionFragmentFragment = { __typename?: "Option"; id: number; text: string };

export type QuestionFragmentFragment = {
  __typename?: "Question";
  id: number;
  type: Types.QuestionType;
  text: string;
  options: Array<{ __typename?: "Option"; id: number; text: string } | null>;
};

export type QuestionnaireDetailFragmentFragment = {
  __typename?: "Questionnaire";
  id: number;
  title: string;
  description: string;
  state: number;
  startAt: any;
  endAt: any;
  questions: Array<{
    __typename?: "Question";
    id: number;
    type: Types.QuestionType;
    text: string;
    options: Array<{ __typename?: "Option"; id: number; text: string } | null>;
  } | null>;
};

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
export const QuestionnaireListPageInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionnaireListPageInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageInfo" } },
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
  ],
} as unknown as DocumentNode<QuestionnaireListPageInfoFragment, unknown>;
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
    ...OptionFragmentFragmentDoc.definitions,
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
    ...QuestionFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<QuestionnaireDetailFragmentFragment, unknown>;
export const GetQuestionnaireMetaDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetQuestionnaireMeta" },
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetQuestionnaireMetaQuery, GetQuestionnaireMetaQueryVariables>;
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
    ...QuestionnaireDetailFragmentFragmentDoc.definitions,
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
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "QuestionnaireListPageInfo" },
                      },
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
    ...QuestionnaireListPageInfoFragmentDoc.definitions,
    ...QuestionnaireFragmentDoc.definitions,
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
    ...PostFragmentDoc.definitions,
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
    ...QuestionnaireFragmentDoc.definitions,
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
    ...QuestionnaireFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<QuestionnaireConnectionQuery, QuestionnaireConnectionQueryVariables>;
