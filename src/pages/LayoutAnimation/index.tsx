import faker from "faker";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { AppBase, transition } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";
import { PillsContainer } from "../../components/PillContainer";
import { SelectedItems } from "../../components/SelectedItems";
import { SelectedItems2 } from "../../components/SelectedItems2";
import { Item } from "../../types";

const initialItems: Item[] = Array.from({ length: 3 }, (_, i) => i).map((v) => {
  return {
    key: faker.datatype.uuid(),
    name: faker.name.findName(),
  };
});

export const LayoutAnimation = () => {
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
      return [
        ...current.slice(0, pos),
        ...newItems,
        ...current.slice(pos, current.length)
      ];
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
    <AppBase
      initial={{ opacity: 1, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={transition}
    >
      <PageHeader title={"Layout animation example"} />
      <div className="flex items-center justify-center mt-8 mr-auto ml-auto w-full">
        <button
          type="button"
          id="add-button"
          onClick={addItem}
          className="appearance-none outline-none border-none bg-transparent text-base py-3 px-4 rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.3,0.3,0.3,1)] hover:bg-gray-50 uppercase"
          data-cy="add-button"
        >
          Add an item
        </button>
        <button
          type="button"
          id="reset-button"
          onClick={resetAll}
          className="appearance-none outline-none border-none bg-transparent text-base py-3 px-4 rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.3,0.3,0.3,1)] hover:bg-gray-50 uppercase"
          data-cy="reset-button"
        >
          reset all
        </button>

      </div>
      <AnimateSharedLayout type="crossfade">
        <PillsContainer items={items} selectItem={selectItem} />
        <SelectedItems items={selectedItems} removeItem={removeItem} />
      </AnimateSharedLayout>
      <SelectedItems2 items={selectedItems} removeItem={removeItem} />
    </AppBase>
  );
}
