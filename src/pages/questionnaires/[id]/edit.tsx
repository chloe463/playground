import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { appBaseStyle, transition } from "../../../components/layout";
import { NewQuestionEditFormContainer } from "../../../components/NewQuestionEditForm";
import { PageHeader } from "../../../components/PageHeader";

type Props = {

};

const EditQuestionnaire: React.VFC<Props> = () => {
  return (
    <motion.div
      className={appBaseStyle}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={transition}
    >
      <PageHeader title={"Edit a questionnaire"}></PageHeader>
      <div className="mt-4 py-0 px-6">
        <Link href={"/questionnaires"} >
          <a className={`
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
      </div>
    </motion.div>
  );
}

export default EditQuestionnaire;
