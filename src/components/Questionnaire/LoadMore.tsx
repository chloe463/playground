import React from "react";
import { PageInfo } from "../../__generated__/types";

type Props = {
  pageInfo: PageInfo | undefined;
  loading: boolean;
  onClickLoadMore: () => void;
};

export const LoadMore: React.FC<Props> = (props) => {
  const { pageInfo } = props;

  if (!pageInfo?.hasNextPage) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <button
        type="button"
        className={`
          relative inline-block cursor-pointer appearance-none overflow-hidden rounded-full border-none bg-transparent
          px-6 py-2 text-body2 uppercase
          text-black-alpha500 outline-none
          transition-all duration-200 ease-in
          hover:text-black-alpha700 focus:text-black-alpha700 active:text-black
        `}
        onClick={() => props.onClickLoadMore()}
        disabled={props.loading}
      >
        Load more
      </button>
    </div>
  );
};
