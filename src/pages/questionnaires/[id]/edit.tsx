import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { appBaseStyle, transition } from "../../../components/layout";
import { NewQuestionEditFormContainer } from "../../../components/NewQuestionEditForm";
import { PageHeader } from "../../../components/PageHeader";
import { addApolloStateToPageProps, initializeApollo } from "../../../hooks/useApolloClient";
import {
  GetQuestionnaireDocument,
  GetQuestionnaireQuery,
} from "../../../__generated__/graphqlOperationTypes";

type Props = {
  questionnaire: GetQuestionnaireQuery;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const { id } = query;
  const client = initializeApollo();
  const { data: questionnaire } = await client.query({
    query: GetQuestionnaireDocument,
    variables: {
      id: Number(id),
    },
  });
  return addApolloStateToPageProps(client, {
    props: {
      questionnaire,
    },
  });
};

const EditQuestionnaire: React.VFC<Props> = (props) => {
  return (
    <motion.div
      className={appBaseStyle}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={transition}
    >
      <PageHeader title={"Edit a questionnaire"}></PageHeader>
      <div className="py-0 px-6 mt-4">
        <Link href={"/questionnaires"}>
          <a
            className={`
              text-body2 text-black-alpha500 transition-all duration-200 ease-out
              hover:text-black-alpha700
              active:text-black-alpha700
              visited:text-black-alpha500
            `}
          >
            Back to list
          </a>
        </Link>
      </div>
      <div className="mt-9 mb-24">
        <NewQuestionEditFormContainer />
        <div className="ml-6">
          <code>
            <pre className="p-8 bg-black-alpha50 rounded">{JSON.stringify(props, null, 2)}</pre>
          </code>
        </div>
      </div>
    </motion.div>
  );
};

export default EditQuestionnaire;
