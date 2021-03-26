import { motion } from "framer-motion";
import styled from "styled-components";
import { pillVariants } from "./constants";
import { Item } from "./types";

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 320px;
  margin: 16px auto 0;
`;

const PillPositionAnimator = styled(motion.span)`
  margin-top: 16px;
  & + & {
    margin-left: 8px;
  }
`;

const PillFadeInAnimator = styled(motion.span)``;

const Pill = styled.span`
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  padding: 8px 24px;
  border-radius: 9999vmax;
  color: white;
  cursor: pointer;
`;

type Props = {
  items: Item[];
  selectItem: (item: Item) => void;
};
export const PillsContainer = (props: Props) => {
  const { items, selectItem } = props;
  return (
    <Base>
      {items.map((item) => (
        <PillPositionAnimator
          key={item.key}
          layout="position"
          transition={{
            duration: 0.3
          }}
        >
          <PillFadeInAnimator
            variants={pillVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.4
            }}
          >
            <Pill onClick={() => selectItem(item)}>{item.name}</Pill>
          </PillFadeInAnimator>
        </PillPositionAnimator>
      ))}
    </Base>
  );
};
