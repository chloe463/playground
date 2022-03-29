import styled from "styled-components";
import { colors } from "../../styles";
import { getElevation } from "../elevation";
import { BaseButton } from "./Button";

export const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(to right bottom, ${colors.lightBrand}, ${colors.brand});
  color: ${colors.white};

  &:hover {
    box-shadow: ${getElevation(8)};
    &:after {
      background-color: ${colors.whiteAlpha50};
    }
  }

  &:active {
    box-shadow: ${getElevation(8)};
    &:after {
      background-color: ${colors.whiteAlpha100};
    }
  }

  &:disabled {
    background: ${colors.blackAlpha200};
    color: ${colors.blackAlpha500};
    box-shadow: none;
    cursor: default;
    &:after {
      background-color: transparent;
    }
  }
`;
