import Link from "next/link";
import { GetQuestionnaireDocument } from "../../../../__generated__/graphqlOperationTypes";
import { PageHeader } from "../../../../components/PageHeader";
import { initializeApollo } from "../../../../hooks/useAplloClient";

type Params = {
  id: string;
};
interface Props {
  params: Params;
}

export default async function EditQuestionnaire(props: Props) {
  const id = Number(props.params.id);
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetQuestionnaireDocument,
    variables: { id },
  });

  return (
    <div>
      <PageHeader title={"Questionnaire"}></PageHeader>
      <div className="mt-4 px-6 py-0">
        <Link
          href={"/questionnaires"}
          className={`
              text-body2 text-black-alpha500 transition-all duration-200 ease-out
              visited:text-black-alpha500
              hover:text-black-alpha700
              active:text-black-alpha700
            `}
        >
          Back to list
        </Link>
      </div>
      <div className="mb-24 ml-6 mt-9">
        <h2 className="heading2 text-black-alpha800">
          {data.questionnaire?.title}
        </h2>
        <p className="body1">
          {data.questionnaire?.description}
        </p>
        <pre>
          <code>{JSON.stringify(data.questionnaire, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}
