import * as Types from "./types";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type CreateQuestionnaireMutationVariables = Types.Exact<{
  questionnaire: Types.CreateQuestionnaireInput;
}>;

export type CreateQuestionnaireMutation = { __typename?: "Mutation" } & {
  createQuestionnaire?: Types.Maybe<
    { __typename?: "CreateQuestionnairePayload" } & {
      questionnaire?: Types.Maybe<
        { __typename?: "Questionnaire" } & Pick<
          Types.Questionnaire,
          "id" | "title" | "description" | "state" | "startAt" | "endAt"
        >
      >;
    }
  >;
};

export type PostFragment = { __typename?: "Post" } & Pick<
  Types.Post,
  "id" | "userId" | "title" | "body"
>;

export type GetCommentsQueryVariables = Types.Exact<{
  postId: Types.Scalars["Int"];
}>;

export type GetCommentsQuery = { __typename?: "Query" } & {
  comments: Array<
    Types.Maybe<
      { __typename?: "Comment" } & Pick<
        Types.Comment,
        "id" | "postId" | "name" | "email" | "body"
      >
    >
  >;
};

export type QuestionnaireFragment = { __typename?: "Questionnaire" } & Pick<
  Types.Questionnaire,
  "id" | "title" | "description" | "state" | "startAt" | "endAt"
> & {
    questions: Array<
      Types.Maybe<{ __typename?: "Question" } & Pick<Types.Question, "id">>
    >;
  };

export type QuestionnaireConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars["Int"]>;
  after?: Types.Maybe<Types.Scalars["String"]>;
}>;

export type QuestionnaireConnectionQuery = { __typename?: "Query" } & {
  questionnaireConnection: {
    __typename?: "QueryQuestionnaireConnection_Connection";
  } & Pick<Types.QueryQuestionnaireConnection_Connection, "totalCount"> & {
      pageInfo: { __typename?: "PageInfo" } & Pick<
        Types.PageInfo,
        "hasNextPage" | "hasPreviousPage" | "startCursor" | "endCursor"
      >;
      edges: Array<
        { __typename?: "QuestionnaireEdge" } & Pick<
          Types.QuestionnaireEdge,
          "cursor"
        > & { node: { __typename?: "Questionnaire" } & QuestionnaireFragment }
      >;
    };
};

export type GetPostConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars["Int"]>;
  after?: Types.Maybe<Types.Scalars["String"]>;
  query?: Types.Maybe<Types.Scalars["String"]>;
}>;

export type GetPostConnectionQuery = { __typename?: "Query" } & {
  postConnection: { __typename?: "QueryPostConnection_Connection" } & Pick<
    Types.QueryPostConnection_Connection,
    "totalCount"
  > & {
      pageInfo: { __typename?: "PageInfo" } & Pick<
        Types.PageInfo,
        "hasNextPage" | "hasPreviousPage" | "startCursor" | "endCursor"
      >;
      edges: Array<
        { __typename?: "PostEdge" } & Pick<Types.PostEdge, "cursor"> & {
            node: { __typename?: "Post" } & PostFragment;
          }
      >;
    };
};

export type GetQuestionnaireQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type GetQuestionnaireQuery = { __typename?: "Query" } & {
  questionnaire?: Types.Maybe<
    { __typename?: "Questionnaire" } & Pick<
      Types.Questionnaire,
      "id" | "title" | "description" | "state" | "startAt" | "endAt"
    > & {
        questions: Array<
          Types.Maybe<
            { __typename?: "Question" } & Pick<
              Types.Question,
              "id" | "type" | "text"
            > & {
                options: Array<
                  Types.Maybe<
                    { __typename?: "Option" } & Pick<
                      Types.Option,
                      "id" | "text"
                    >
                  >
                >;
              }
          >
        >;
      }
  >;
};

export const PostFragmentDoc = ({
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Post" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Post" },
      },
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
} as unknown) as DocumentNode<PostFragment, unknown>;
export const QuestionnaireFragmentDoc = ({
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Questionnaire" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Questionnaire" },
      },
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown) as DocumentNode<QuestionnaireFragment, unknown>;
export const CreateQuestionnaireDocument = ({
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateQuestionnaire" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "questionnaire" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateQuestionnaireInput" },
            },
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
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "questionnaire" },
                },
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
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "state" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startAt" },
                      },
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
} as unknown) as DocumentNode<
  CreateQuestionnaireMutation,
  CreateQuestionnaireMutationVariables
>;
export const GetCommentsDocument = ({
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetComments" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
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
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "postId" },
                },
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
} as unknown) as DocumentNode<GetCommentsQuery, GetCommentsQueryVariables>;
export const QuestionnaireConnectionDocument = ({
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuestionnaireConnection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
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
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
                },
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
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPreviousPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
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
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "cursor" },
                      },
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
} as unknown) as DocumentNode<
  QuestionnaireConnectionQuery,
  QuestionnaireConnectionQueryVariables
>;
export const GetPostConnectionDocument = ({
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPostConnection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "query" },
          },
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
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "query" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "query" },
                },
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
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPreviousPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
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
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "Post" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "cursor" },
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
    ...PostFragmentDoc.definitions,
  ],
} as unknown) as DocumentNode<
  GetPostConnectionQuery,
  GetPostConnectionQueryVariables
>;
export const GetQuestionnaireDocument = ({
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
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
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
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "options" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
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
  ],
} as unknown) as DocumentNode<
  GetQuestionnaireQuery,
  GetQuestionnaireQueryVariables
>;
