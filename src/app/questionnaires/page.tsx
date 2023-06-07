import { getFragmentData, graphql } from "../../__generated__/gql-masking";
import {
  QuestionnairesPageQueryDocument,
  QuestionnairesPageQueryQueryVariables,
} from "../../__generated__/gql-masking/graphql";
import { ApolloProvider } from "../../components/ApolloProvider";
import { QUESTIONNAIRE_FRAGMENT, QuestionnaireList } from "../../components/Questionnaire";
import { Pagination } from "../../components/Questionnaire/Pagination";
import { initializeApollo } from "../../hooks/useAplloClient";
import { Header } from "./Header";

export const fetchCache = "force-no-store"; // revalidate this segment every 60 seconds

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QUESTIONNARE_CONNECTION_QUERY = graphql(/* GraphQL */ `
  query QuestionnairesPageQuery($after: String, $before: String, $first: Int, $last: Int) {
    questionnaireConnection(after: $after, before: $before, first: $first, last: $last) {
      totalCount
      pageInfo {
        ...QuestionnaireListPageInfo
      }
      edges {
        cursor
        node {
          ...Questionnaire
        }
      }
    }
  }
`);

type Params = {
  lastPageStartCursor?: string;
  lastPageEndCursor?: string;
};
interface Props {
  searchParams: Params;
}

const DEFAULT_VARIABLES: QuestionnairesPageQueryQueryVariables = {
  first: 10,
  after: "0",
};

function buildVariables(searchParams: Params): QuestionnairesPageQueryQueryVariables {
  const { lastPageEndCursor, lastPageStartCursor } = searchParams;
  if (!lastPageEndCursor && !lastPageStartCursor) return DEFAULT_VARIABLES;
  return searchParams.lastPageEndCursor
    ? {
        first: 10,
        after: searchParams.lastPageEndCursor || "0",
      }
    : {
        last: 10,
        before: searchParams.lastPageStartCursor || "0",
      };
}

export default async function QuestionnairesAppPage(props: Props) {
  const client = initializeApollo();
  const variables = buildVariables(props.searchParams);
  const { data } = await client.query({
    query: QuestionnairesPageQueryDocument,
    variables,
  });
  const { questionnaireConnection } = data;
  const questionnaires =
    questionnaireConnection.edges.map((edge) =>
      getFragmentData(QUESTIONNAIRE_FRAGMENT, edge.node)
    ) || [];
  const cache = JSON.stringify(client.cache.extract());

  return (
    <div>
      <Header />
      <ApolloProvider cache={cache}>
        <div className="mt-6">
          <QuestionnaireList questionnaires={questionnaires} />
        </div>
        <div className="py-0 px-6 mt-4">
          <Pagination data={data.questionnaireConnection.pageInfo} />
        </div>
      </ApolloProvider>
    </div>
  );
}
