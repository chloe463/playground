import styled from "styled-components";
import { colors } from "../../styles";

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
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
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
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
    &:after {
      background-color: ${colors.blackAlpha50};
    }
  }

  &:active {
    &:after {
      background-color: ${colors.blackAlpha100};
    }
  }

  &:disabled {
    background-color: ${colors.blackAlpha200};
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${colors.brand};
  color: ${colors.white};

  &:hover {
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
    &:after {
      background-color: ${colors.whiteAlpha50};
    }
  }

  &:active {
    &:after {
      background-color: ${colors.whiteAlpha100};
    }
  }

  &:disabled {
    background-color: ${colors.blackAlpha200};
    color: ${colors.blackAlpha500};
    box-shadow: none;
    cursor: default;
    &:after {
      background-color: transparent;
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
