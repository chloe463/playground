import Link from "next/link";
import { QuestionnairesPageQueryDocument, QuestionnairesPageQueryQueryVariables } from "../../__generated__/gql-masking/graphql";
import { getFragmentData, graphql } from "../../__generated__/gql-masking";
import { initializeApollo } from "../../hooks/useAplloClient";
import { QUESTIONNAIRE_FRAGMENT, QuestionnaireList } from "../../components/Questionnaire";
import { Header } from "./Header";
import { ApolloProvider } from "../../components/ApolloProvider";

export const fetchCache = "force-no-store"; // revalidate this segment every 60 seconds

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QUESTIONNARE_CONNECTION_QUERY = graphql(/* GraphQL */`
  query QuestionnairesPageQuery($after: String, $before: String, $first: Int, $last: Int) {
    questionnaireConnection(after: $after, before: $before, first: $first, last: $last) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
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
}
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
  return searchParams.lastPageEndCursor ? {
    first: 10,
    after: searchParams.lastPageEndCursor || "0"
  } : {
    last: 10,
    before: searchParams.lastPageStartCursor || "0"
  };
};

export default async function QuestionnairesAppPage (props: Props) {
  const client = initializeApollo();
  const variables = buildVariables(props.searchParams);
  const { data } = await client.query({
    query: QuestionnairesPageQueryDocument,
    variables,
  });
  const { questionnaireConnection } = data;
  const { hasPreviousPage, hasNextPage, startCursor, endCursor } = data.questionnaireConnection.pageInfo;
  const questionnaires = questionnaireConnection.edges.map((edge) => getFragmentData(QUESTIONNAIRE_FRAGMENT, edge.node)) || [];
  const cache = JSON.stringify(client.cache.extract());

  return (
    <div>
      <Header />
      <ApolloProvider cache={cache}>
        <QuestionnaireList questionnaires={questionnaires} />
      </ApolloProvider>
      <div className="py-0 px-6 mt-4">
        {hasPreviousPage && (
          <Link
            href={{
              pathname: "/questionnaires",
              query: {
                lastPageStartCursor: startCursor,
              },
            }}
            className={`
              text-body2 text-black-alpha500 transition-all duration-200 ease-out
              hover:text-black-alpha700
              active:text-black-alpha700
              visited:text-black-alpha500
            `}
          >
            Previous page
          </Link>
        )}
        {hasNextPage && (
          <Link
            href={{
              pathname: "/questionnaires",
              query: {
                lastPageEndCursor: endCursor,
              },
            }}
            className={`
              text-body2 text-black-alpha500 transition-all duration-200 ease-out
              hover:text-black-alpha700
              active:text-black-alpha700
              visited:text-black-alpha500
            `}
          >
            Next page
          </Link>
        )}
      </div>
    </div>
  );
}
