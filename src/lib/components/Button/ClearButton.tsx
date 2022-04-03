import styled from "styled-components";
import { colors } from "../../styles";
import { BaseButton } from "./Button";

export const ClearButton = styled(BaseButton)`
  background-color: transparent;
  color: ${colors.blackAlpha800};
  box-shadow: none;

  &:hover {
    box-shadow: none;
    &:after {
      background-color: ${colors.blackAlpha50};
    }
  }

  &:active {
    box-shadow: none;
    &:after {
      background-color: ${colors.blackAlpha100};
    }
  }

  &:disabled {
    box-shadow: none;
    background-color: ${colors.blackAlpha200};
    color: ${colors.blackAlpha500};
    cursor: default;
    &:hover {
      box-shadow: none;
      &:after {
        background-color: transparent;
      }
    }
  }
`;
