import { QuestionnaireConnectionDocument } from "../../__generated__/gql-masking/graphql";
import { initializeApollo } from "../../hooks/useAplloClient";
import { ApolloProvider } from "../../components/ApolloProvider";
import { QuestionnaireListContainer } from "../../components/Questionnaire";
import { Header } from "./Header";

export default async function QuestionnairesAppPage () {
  const client = initializeApollo();
  await client.query({
    query: QuestionnaireConnectionDocument,
    variables: { first: 10, after: "0" },
  });
  const cache = JSON.stringify(client.cache.extract());

  return (
    <div>
      <ApolloProvider cache={cache}>
        <Header />
        <div className="mt-9 mb-24">
          <QuestionnaireListContainer />
        </div>
      </ApolloProvider>
    </div>
  );
}
