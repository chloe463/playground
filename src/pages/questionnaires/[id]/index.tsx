import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { graphql } from "../../../__generated__/gql-masking";
import { GetQuestionnaireQuery } from "../../../__generated__/gql-masking/graphql";
import { PageHeader } from "../../../components/PageHeader";
import { QuestionnaireDetail } from "../../../components/QuestionnaireDetail";
import { appBaseStyle, transition } from "../../../components/layout";
import { addApolloStateToPageProps, initializeApollo } from "../../../hooks/useAplloClient";
// import { GetQuestionnaireQuery } from "../../../__generated__/graphqlOperationTypes";

type Props = {
  data: GetQuestionnaireQuery;
};

export const GET_QUESTIONNAIRE = graphql(/* GraphQL */ `
  query GetQuestionnaire($id: Int!) {
    questionnaire(id: $id) {
      ...QuestionnaireDetailFragment
    }
  }
`);

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const { id } = query;
  const client = initializeApollo();
  const { data } = await client.query({
    query: GET_QUESTIONNAIRE,
    variables: {
      id: Number(id),
    },
  });
  return addApolloStateToPageProps(client, {
    props: {
      data,
    },
  });
};

const QuestionnaireIndex: React.FC<Props> = (props) => {
  if (!props.data.questionnaire) return null;
  return (
    <motion.div
      className={appBaseStyle}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={transition}
    >
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
      <div className="mt-9 mb-24">
        <div className="ml-6">
          <QuestionnaireDetail data={props.data.questionnaire} />
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionnaireIndex;
