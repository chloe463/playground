import Link from "next/link";
import { NewQuestionnaireForm } from "../../../components/NewQuestionnaireForm";
import { PageHeader } from "../../../components/PageHeader";

export default function NewQuestionnaire() {
  return (
    <>
      <PageHeader title={"Create New Questionnaire"}></PageHeader>
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
      <div className="mb-24 mt-9">
        <NewQuestionnaireForm />
      </div>
    </>
  );
}
