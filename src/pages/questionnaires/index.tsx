import { AnimatePresence, motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { appBaseStyle, transition } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";
import { QuestionnaireListContainer } from "../../components/Questionnaire";
import { addApolloStateToPageProps, initializeApollo } from "../../hooks/useAplloClient";
import { PrimaryButton } from "../../lib";
import {
  QuestionnaireConnectionDocument,
  QuestionnaireConnectionQuery,
} from "../../__generated__/graphqlOperationTypes";

type Props = {
  questionnaires: QuestionnaireConnectionQuery | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const client = initializeApollo();
  try {
    const { data: questionnaires } = await client.query({
      query: QuestionnaireConnectionDocument,
      variables: { first: 10, after: "0" },
    });

    return addApolloStateToPageProps(client, {
      props: {
        questionnaires,
      },
    });
  } catch (e) {
    console.error(e);
    return {
      props: {
        questionnaires: null,
      },
    };
  }
};

const Questionnaires: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <motion.div
      className={appBaseStyle}
      initial={{ opacity: 1, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={transition}
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}
          transition={transition}
        >
          <PageHeader title={"CRUD examples"}>
            <div className="absolute top-0 right-6">
              <PrimaryButton type="button" onClick={() => router.push("/questionnaires/new")}>
                Create New
              </PrimaryButton>
            </div>
          </PageHeader>
          <div className="mt-9 mb-24">
            <QuestionnaireListContainer />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Questionnaires;
