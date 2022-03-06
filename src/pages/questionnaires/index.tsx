import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { appBaseStyle, transition } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";
import { QuestionnaireListContainer } from "../../components/QuestionnaireListContainer";
import { PrimaryButton } from "../../lib/components/Button";

type Props = {};

const Questionnaires: React.VFC<Props> = () => {
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
