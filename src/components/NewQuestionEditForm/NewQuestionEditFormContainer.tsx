import React from "react";
import styled from "styled-components";
import { NewQuestionEditForm } from "./NewQuestionEditForm";

type Props = {

};

export const NewQuestionEditFormContainer: React.VFC<Props> = (props) => {
  return (
    <NewQuestionEditForm />
  );
}

const Base = styled.div``;
