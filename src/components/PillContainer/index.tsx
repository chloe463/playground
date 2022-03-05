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
      <div className="flex justify-center items-center flex-wrap mt-4 mb-0 mx-auto w-160">
        {items.map((item) => (
          <motion.div
            key={item.key}
            layout="position"
            transition={{
              duration: 0.3
            }}
            className="p-1.5"
          >
            <motion.div
              variants={pillVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.4
              }}
            >
              <div
                className="
                  pill
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  text-button
                  text-white
                  py-2 px-6
                  rounded-full
                  cursor-pointer
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
