import Link from "next/link";
import React from "react";
import { FragmentType, getFragmentData, graphql } from "../../__generated__/gql-masking";

const PageInfoFragment = graphql(/* GraphQL */ `
  fragment QuestionnaireListPageInfo on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`);
interface Props {
  data: FragmentType<typeof PageInfoFragment>;
}

export const Pagination: React.FC<Props> = (props) => {
  const pageInfo = getFragmentData(PageInfoFragment, props.data);
  const { hasPreviousPage, hasNextPage, startCursor, endCursor } = pageInfo;
  return (
    <div className="flex gap-2 items-center">
      {hasPreviousPage && (
        <Link
          href={{
            pathname: "/questionnaires",
            query: {
              lastPageStartCursor: startCursor,
            },
          }}
          className={`
            text-body2 text-black-alpha500 transition-all duration-200 ease-out
            hover:text-black-alpha700
            active:text-black-alpha700
            visited:text-black-alpha500
          `}
        >
          Previous page
        </Link>
      )}
      {hasNextPage && (
        <Link
          href={{
            pathname: "/questionnaires",
            query: {
              lastPageEndCursor: endCursor,
            },
          }}
          className={`
            text-body2 text-black-alpha500 transition-all duration-200 ease-out
            hover:text-black-alpha700
            active:text-black-alpha700
            visited:text-black-alpha500
          `}
        >
          Next page
        </Link>
      )}
    </div>
  );
};
