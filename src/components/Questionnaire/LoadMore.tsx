import React from "react";
import { PageInfo } from "../../__generated__/types";

type Props = {
  pageInfo: PageInfo | undefined;
  loading: boolean;
  onClickLoadMore: () => void;
};

export const LoadMore: React.VFC<Props> = (props) => {
  const { pageInfo } = props;

  if (!pageInfo?.hasNextPage) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <button
        type="button"
        className={`
          relative inline-block py-2 px-6 appearance-none outline-none border-none bg-transparent
          text-black-alpha500 text-body2 uppercase rounded-full
          cursor-pointer overflow-hidden
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
