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
      <div className="flex flex-wrap justify-center items-center mx-auto mt-4 mb-0 w-full">
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
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className="
                  py-2
                  px-6 text-button text-white bg-gradient-to-r
                  from-indigo-500
                  via-purple-500
                  to-pink-500 rounded-full
                  hover:shadow-xl
                  transition-all
                  duration-200
                  cursor-pointer
                  pill
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
