import { AnimatePresence, motion } from "framer-motion";
import { pillVariants } from "../../constants";
import { Item } from "../../types";

type Props = {
  items: Item[];
  selectItem: (item: Item) => void;
};

export const PillsContainer = (props: Props) => {
  const { items, selectItem } = props;
  return (
    <AnimatePresence initial={true}>
      <div className="mx-auto mb-0 mt-4 flex w-full flex-wrap items-center justify-center">
        {items.map((item) => (
          <motion.div
            key={item.key}
            layout="position"
            transition={{
              duration: 0.3,
            }}
            className="p-1.5"
          >
            <motion.div
              variants={pillVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.4,
              }}
            >
              <div
                 
                className="
                  pill
                  cursor-pointer rounded-full bg-gradient-to-r from-indigo-500
                  via-purple-500
                  to-pink-500
                  px-6 py-2
                  text-button
                  text-white
                  transition-all
                  duration-200
                  hover:shadow-xl
                "
                onClick={() => selectItem(item)}
                data-cy="pill"
              >
                {item.name}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};
