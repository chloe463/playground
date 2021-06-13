import React from "react";
import styled from "styled-components";
import { useCrudPage } from "../../hooks/useCrudPage";

type Props = {

};

export const NewQuestionEditFormContainer: React.VFC<Props> = (props) => {
  const { moveToQuestionEditPage, stateBetweenPages } = useCrudPage();
  console.log({ stateBetweenPages });
  return (
    <Base>New Component Works!</Base>
  );
}

const Base = styled.div``;
