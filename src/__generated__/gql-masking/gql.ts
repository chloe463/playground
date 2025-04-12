/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query GetQuestionnaireMeta($id: Int!) {\n    questionnaire(id: $id) {\n      id\n      title\n      description\n    }\n  }\n":
    types.GetQuestionnaireMetaDocument,
  "\n  query GetQuestionnaire($id: Int!) {\n    questionnaire(id: $id) {\n      ...QuestionnaireDetailFragment\n    }\n  }\n":
    types.GetQuestionnaireDocument,
  "\n  query QuestionnairesPageQuery($after: String, $before: String, $first: Int, $last: Int) {\n    questionnaireConnection(after: $after, before: $before, first: $first, last: $last) {\n      totalCount\n      pageInfo {\n        ...QuestionnaireListPageInfo\n      }\n      edges {\n        cursor\n        node {\n          ...Questionnaire\n        }\n      }\n    }\n  }\n":
    types.QuestionnairesPageQueryDocument,
  "\n  mutation CreateQuestionnaire($questionnaire: CreateQuestionnaireInput!) {\n    createQuestionnaire(questionnaire: $questionnaire) {\n      questionnaire {\n        id\n        title\n        description\n        state\n        startAt\n        endAt\n      }\n    }\n  }\n":
    types.CreateQuestionnaireDocument,
  "\n  query GetComments($postId: Int!) {\n    comments(postId: $postId) {\n      id\n      postId\n      name\n      email\n      body\n    }\n  }\n":
    types.GetCommentsDocument,
  "\n  fragment Post on Post {\n    id\n    userId\n    title\n    body\n  }\n":
    types.PostFragmentDoc,
  "\n  query GetPostConnection($first: Int, $after: String, $query: String) {\n    postConnection(first: $first, after: $after, query: $query) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...Post\n        }\n        cursor\n      }\n    }\n  }\n":
    types.GetPostConnectionDocument,
  "\n  fragment QuestionnaireListPageInfo on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n":
    types.QuestionnaireListPageInfoFragmentDoc,
  "\n  fragment Questionnaire on Questionnaire {\n    id\n    title\n    description\n    state\n    startAt\n    endAt\n    questions {\n      id\n    }\n  }\n":
    types.QuestionnaireFragmentDoc,
  "\n  mutation CancelToDeleteQuestionnaire($id: Int!) {\n    cancelToDeleteQuestionnaire(id: $id) {\n      questionnaire {\n        ...Questionnaire\n      }\n    }\n  }\n  \n":
    types.CancelToDeleteQuestionnaireDocument,
  "\n  mutation DeleteQuestionnaire($id: Int!) {\n    deleteQuestionnaire(id: $id) {\n      id\n      result\n    }\n  }\n":
    types.DeleteQuestionnaireDocument,
  "\n  query QuestionnaireConnection($first: Int, $after: String) {\n    questionnaireConnection(first: $first, after: $after) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          ...Questionnaire\n        }\n      }\n    }\n  }\n":
    types.QuestionnaireConnectionDocument,
  "\n  fragment OptionFragment on Option {\n    id\n    text\n  }\n":
    types.OptionFragmentFragmentDoc,
  "\n  fragment QuestionFragment on Question {\n    id\n    type\n    text\n    options {\n      ...OptionFragment\n    }\n  }\n":
    types.QuestionFragmentFragmentDoc,
  "\n  fragment QuestionnaireDetailFragment on Questionnaire {\n    id\n    title\n    description\n    state\n    startAt\n    endAt\n    questions {\n      ...QuestionFragment\n    }\n  }\n":
    types.QuestionnaireDetailFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetQuestionnaireMeta($id: Int!) {\n    questionnaire(id: $id) {\n      id\n      title\n      description\n    }\n  }\n"
): typeof documents["\n  query GetQuestionnaireMeta($id: Int!) {\n    questionnaire(id: $id) {\n      id\n      title\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetQuestionnaire($id: Int!) {\n    questionnaire(id: $id) {\n      ...QuestionnaireDetailFragment\n    }\n  }\n"
): typeof documents["\n  query GetQuestionnaire($id: Int!) {\n    questionnaire(id: $id) {\n      ...QuestionnaireDetailFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query QuestionnairesPageQuery($after: String, $before: String, $first: Int, $last: Int) {\n    questionnaireConnection(after: $after, before: $before, first: $first, last: $last) {\n      totalCount\n      pageInfo {\n        ...QuestionnaireListPageInfo\n      }\n      edges {\n        cursor\n        node {\n          ...Questionnaire\n        }\n      }\n    }\n  }\n"
): typeof documents["\n  query QuestionnairesPageQuery($after: String, $before: String, $first: Int, $last: Int) {\n    questionnaireConnection(after: $after, before: $before, first: $first, last: $last) {\n      totalCount\n      pageInfo {\n        ...QuestionnaireListPageInfo\n      }\n      edges {\n        cursor\n        node {\n          ...Questionnaire\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateQuestionnaire($questionnaire: CreateQuestionnaireInput!) {\n    createQuestionnaire(questionnaire: $questionnaire) {\n      questionnaire {\n        id\n        title\n        description\n        state\n        startAt\n        endAt\n      }\n    }\n  }\n"
): typeof documents["\n  mutation CreateQuestionnaire($questionnaire: CreateQuestionnaireInput!) {\n    createQuestionnaire(questionnaire: $questionnaire) {\n      questionnaire {\n        id\n        title\n        description\n        state\n        startAt\n        endAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetComments($postId: Int!) {\n    comments(postId: $postId) {\n      id\n      postId\n      name\n      email\n      body\n    }\n  }\n"
): typeof documents["\n  query GetComments($postId: Int!) {\n    comments(postId: $postId) {\n      id\n      postId\n      name\n      email\n      body\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Post on Post {\n    id\n    userId\n    title\n    body\n  }\n"
): typeof documents["\n  fragment Post on Post {\n    id\n    userId\n    title\n    body\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetPostConnection($first: Int, $after: String, $query: String) {\n    postConnection(first: $first, after: $after, query: $query) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...Post\n        }\n        cursor\n      }\n    }\n  }\n"
): typeof documents["\n  query GetPostConnection($first: Int, $after: String, $query: String) {\n    postConnection(first: $first, after: $after, query: $query) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...Post\n        }\n        cursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment QuestionnaireListPageInfo on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n"
): typeof documents["\n  fragment QuestionnaireListPageInfo on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Questionnaire on Questionnaire {\n    id\n    title\n    description\n    state\n    startAt\n    endAt\n    questions {\n      id\n    }\n  }\n"
): typeof documents["\n  fragment Questionnaire on Questionnaire {\n    id\n    title\n    description\n    state\n    startAt\n    endAt\n    questions {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CancelToDeleteQuestionnaire($id: Int!) {\n    cancelToDeleteQuestionnaire(id: $id) {\n      questionnaire {\n        ...Questionnaire\n      }\n    }\n  }\n  \n"
): typeof documents["\n  mutation CancelToDeleteQuestionnaire($id: Int!) {\n    cancelToDeleteQuestionnaire(id: $id) {\n      questionnaire {\n        ...Questionnaire\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteQuestionnaire($id: Int!) {\n    deleteQuestionnaire(id: $id) {\n      id\n      result\n    }\n  }\n"
): typeof documents["\n  mutation DeleteQuestionnaire($id: Int!) {\n    deleteQuestionnaire(id: $id) {\n      id\n      result\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query QuestionnaireConnection($first: Int, $after: String) {\n    questionnaireConnection(first: $first, after: $after) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          ...Questionnaire\n        }\n      }\n    }\n  }\n"
): typeof documents["\n  query QuestionnaireConnection($first: Int, $after: String) {\n    questionnaireConnection(first: $first, after: $after) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          ...Questionnaire\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment OptionFragment on Option {\n    id\n    text\n  }\n"
): typeof documents["\n  fragment OptionFragment on Option {\n    id\n    text\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment QuestionFragment on Question {\n    id\n    type\n    text\n    options {\n      ...OptionFragment\n    }\n  }\n"
): typeof documents["\n  fragment QuestionFragment on Question {\n    id\n    type\n    text\n    options {\n      ...OptionFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment QuestionnaireDetailFragment on Questionnaire {\n    id\n    title\n    description\n    state\n    startAt\n    endAt\n    questions {\n      ...QuestionFragment\n    }\n  }\n"
): typeof documents["\n  fragment QuestionnaireDetailFragment on Questionnaire {\n    id\n    title\n    description\n    state\n    startAt\n    endAt\n    questions {\n      ...QuestionFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
