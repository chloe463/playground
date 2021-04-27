import faker from "faker";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
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
    const rand = Math.ceil(Math.random() * 1000);

    if (items.length === 0) {
      setItems([{ key: faker.datatype.uuid(), name: faker.name.findName() }]);
      return;
    }

    const pos = rand % items.length;
    const newItem = { key: faker.datatype.uuid(), name: faker.name.findName() };
    setItems((current) => {
      return [
        ...current.slice(0, pos),
        newItem,
        ...current.slice(pos, current.length)
      ];
    });

    if (selectedItems.find((v) => v.key === newItem.key)) {
      return;
    }
    setSelectedItems((current) => [newItem, ...current]);
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
      <Buttons>
        <Button onClick={addItem}>Add an item</Button>
        <Button onClick={resetAll}>reset all</Button>
      </Buttons>
      <AnimateSharedLayout type="crossfade">
        <PillsContainer items={items} selectItem={selectItem} />
        <SelectedItems items={selectedItems} removeItem={removeItem} />
      </AnimateSharedLayout>
      <SelectedItems2 items={selectedItems} removeItem={removeItem} />
    </AppBase>
  );
}

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
  width: 640px;
`;

const Button = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  line-height: 24px;
  padding: 10px 18px;
  border-radius: 9999vmax;
  text-transform: uppercase;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.3, 0.3, 0.3, 1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  &:focus,
  &:active {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
