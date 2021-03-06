import styled from "styled-components";
import { colors } from "../../styles";
import { getElevation } from "../elevation";

export const BaseButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 24px;
  appearance: none;
  outline: none;
  border: none;
  background-color: ${colors.white};

  color: ${colors.blackAlpha800};
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-radius: 9999vmax;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.3, 0.3, 0.3, 1);
  box-shadow: ${getElevation(2)};
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover {
    box-shadow: ${getElevation(8)};
    &:after {
      background-color: ${colors.blackAlpha50};
    }
  }

  &:active {
    box-shadow: ${getElevation(8)};
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

export const IconButton = styled(BaseButton)`
  width: 40px;
  height: 40px;
  padding: 0;
  display: inline-grid;
  place-items: center;
`;
