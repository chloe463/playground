import { motion, Transition } from "framer-motion";
import styled from "styled-components";

export const AppBase = styled(motion.div)`
  display: block;
  width: 80%;
  max-width: 1280px;
  min-width: 720px;
  margin: 0 auto;
`;

export const SelectedItemsContainer = styled.div`
  display: flex;
  margin: 64px auto;
  padding: 24px;
  width: 100%;
  min-width: 720px;
  max-width: 1280px;
  overflow-x: scroll;
  line-height: 48px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.03);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  &:empty {
    height: 48px;
  }
`;
// const SelectedItemPillLayoutAnimator = styled(motion.span)`
export const SelectedItemPillLayoutAnimator = styled.span`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition-property: all;
  & + & {
    margin-left: 8px;
  }
`;

export const SelectedItemPillFadeInAnimator = styled(motion.span)``;

export const SelectedItemPillBase = styled.span`
  background: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  padding: 8px 24px;
  border-radius: 9999vmax;
  color: white;
  word-break: keep-all;
  cursor: pointer;
`;

export const transition: Transition = {
  ease: [0.3, 0.3, 0.3, 1],
  duration: 0.5,
};
