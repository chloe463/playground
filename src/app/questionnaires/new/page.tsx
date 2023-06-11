import Link from "next/link";
import { NewQuestionnaireForm } from "../../../components/NewQuestionnaireForm";
import { PageHeader } from "../../../components/PageHeader";

export default function NewQuestionnaire() {
  return (
    <>
      <PageHeader title={"Create New Questionnaire"}></PageHeader>
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
        <NewQuestionnaireForm />
      </div>
    </>
  );
}
