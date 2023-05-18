import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { appBaseStyle, transition } from "../../components/layout";
import { NewQuestionnaireFormContainer } from "../../components/NewQuestionnaireForm/NewQuestionnaireFormContainer";
import { PageHeader } from "../../components/PageHeader";

type Props = {};

const NewQuestionnaire: React.VFC<Props> = () => {
  return (
    <motion.div
      className={appBaseStyle}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={transition}
    >
      <PageHeader title={"Create New Questionnaire"}></PageHeader>
      <div className="py-0 px-6 mt-4">
        <Link
          href={"/questionnaires"}
          className={`
            text-body2 text-black-alpha500 transition-all duration-200 ease-out
            hover:text-black-alpha700
            active:text-black-alpha700
            visited:text-black-alpha500
          `}>
          
            Back to list
          
        </Link>
      </div>
      <div className="mt-9 mb-24">
        <NewQuestionnaireFormContainer />
      </div>
    </motion.div>
  );
};

export default NewQuestionnaire;
