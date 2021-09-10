import { History } from "history";
import { useHistory, useLocation } from "react-router";

type CrudPageHistoryState = {
  id: number;
};

// type CrudPageOprions = {

// };

type CrudPage = {
  history: History<CrudPageHistoryState>;
  stateBetweenPages: CrudPageHistoryState;
  moveToQuestionEditPage: (id: number) => void;
};

export const useCrudPage = (): CrudPage => {
  const history = useHistory<CrudPageHistoryState>();
  const { state } = useLocation<CrudPageHistoryState>();

  const moveToQuestionEditPage = (id: number) => {
    history.push({
      pathname: `/crud/${id}/edit`,
      state: {
        id,
      }
    })
  }

  return {
    history,
    stateBetweenPages: state,
    moveToQuestionEditPage,
  }
};
