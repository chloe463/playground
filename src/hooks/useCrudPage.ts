import { NextRouter, useRouter } from "next/router";

type CrudPageHistoryState = {
  id: number;
};

// type CrudPageOprions = {

// };

type CrudPage = {
  router: NextRouter;
  stateBetweenPages: CrudPageHistoryState;
  moveToQuestionEditPage: (id: number) => void;
};

export const useCrudPage = (): CrudPage => {
  const router = useRouter();
  const { query } = router;
  const state = JSON.parse(query.state as string) as CrudPageHistoryState;

  const moveToQuestionEditPage = (id: number) => {
    const path = `/questionnaires/${id}/edit`;
    const searchParams = router.asPath.split("?")[1];
    const asPath = searchParams ? `${path}?${searchParams}` : path;
    router.push(
      {
        pathname: path,
        query: {
          id,
          state: JSON.stringify({ id }),
        },
      },
      asPath
    );
  };

  return {
    router,
    stateBetweenPages: state,
    moveToQuestionEditPage,
  };
};
