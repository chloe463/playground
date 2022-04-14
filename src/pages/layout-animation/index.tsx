import { faker } from "@faker-js/faker";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { appBaseStyle, transition } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";
import { PillsContainer } from "../../components/PillContainer";
import { SelectedItems } from "../../components/SelectedItems";
import { SelectedItems2 } from "../../components/SelectedItems2";
import { Item } from "../../types";

const initialItems: Item[] = Array.from({ length: 3 }, (_, i) => i).map(() => {
  return {
    key: faker.datatype.uuid(),
    name: faker.name.findName(),
  };
});

const LayoutAnimation = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const resetAll = () => {
    setItems(initialItems);
    setSelectedItems([]);
  };

  const addItem = () => {
    if (items.length === 0) {
      setItems([{ key: faker.datatype.uuid(), name: faker.name.findName() }]);
      return;
    }

    const count = faker.datatype.number(10);
    const newItems = Array.from({ length: count }).map((_) => {
      return {
        key: faker.datatype.uuid(),
        name: faker.name.findName(),
      };
    });

    const pos = faker.datatype.number() % items.length;
    setItems((current) => {
      return [...current.slice(0, pos), ...newItems, ...current.slice(pos, current.length)];
    });
  };

  const selectItem = (item: Item) => {
    if (selectedItems.find((v) => v.key === item.key)) {
      return;
    }
    setSelectedItems((current) => [item, ...current]);
  };

  const removeItem = (item: Item) => {
    const { key } = item;
    setSelectedItems((current) => {
      return current.filter((item) => item.key !== key);
    });
  };

  return (
    <motion.div
      className={appBaseStyle}
      initial={{ opacity: 1, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={transition}
    >
      <PageHeader title={"Layout animation example"} />
      <div className="flex justify-center items-center mx-auto mt-8 w-full">
        <button
          type="button"
          id="add-button"
          onClick={addItem}
          className="py-3 px-4 text-body2 uppercase bg-transparent hover:bg-gray-50 rounded-full border-none outline-none transition-all duration-300 ease-[cubic-bezier(0.3,0.3,0.3,1)] appearance-none cursor-pointer"
          data-cy="add-button"
        >
          Add an item
        </button>
        <button
          type="button"
          id="reset-button"
          onClick={resetAll}
          className="py-3 px-4 text-body2 uppercase bg-transparent hover:bg-gray-50 rounded-full border-none outline-none transition-all duration-300 ease-[cubic-bezier(0.3,0.3,0.3,1)] appearance-none cursor-pointer"
          data-cy="reset-button"
        >
          reset all
        </button>
      </div>
      <PillsContainer items={items} selectItem={selectItem} />
      <SelectedItems items={selectedItems} removeItem={removeItem} />
      <SelectedItems2 items={selectedItems} removeItem={removeItem} />
    </motion.div>
  );
};

export default LayoutAnimation;
