import Link from "next/link";
import { graphql } from "../../../__generated__/gql-masking";
import { ApolloProvider } from "../../../components/ApolloProvider";
import { PageHeader } from "../../../components/PageHeader";
import { initializeApollo } from "../../../hooks/useAplloClient";
import { QuestionnaireDetail } from "../../../components/QuestionnaireDetail";
// import { GetQuestionnaireQuery } from "../../../__generated__/graphqlOperationTypes";

const GET_QUESTIONNAIRE = graphql(/* GraphQL */ `
  query GetQuestionnaire($id: Int!) {
    questionnaire(id: $id) {
      ...QuestionnaireDetailFragment
    }
  }
`);

type Params = {
  id: string;
};

interface Props {
  params: Params;
}

export default async function QuestionnaireIndex(props: Props) {
  const id = Number(props.params.id);
  const client = initializeApollo();
  const { data } = await client.query({
    query: GET_QUESTIONNAIRE,
    variables: {
      id,
    },
  });
  const cache = JSON.stringify(client.cache.extract());
  return (
    <div>
      <PageHeader title={"Questionnaire"}></PageHeader>
      <div className="py-0 px-6 mt-4">
        <Link
          href={"/questionnaires"}
          className={`
              text-body2 text-black-alpha500 transition-all duration-200 ease-out
              hover:text-black-alpha700
              active:text-black-alpha700
              visited:text-black-alpha500
            `}
        >
          Back to list
        </Link>
      </div>
      <ApolloProvider cache={cache}>
        <div className="mt-9 mb-24 ml-6">
          <QuestionnaireDetail data={data.questionnaire!} />
        </div>
      </ApolloProvider>
    </div>
  );
}
