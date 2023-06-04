import Link from "next/link";
import React from "react";

type Params = {
  id: string;
}

interface Props {
  params: Params;
  searchParams: Record<string, string>;
};

export default async function QuestionnaireDetail(props: Props) {
  return (
    <div>
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
      <div className="px-6">
        QuestionnaireDetail Component Works!
        <pre>
          <code>
            {JSON.stringify(props, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}
