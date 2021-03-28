import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { PillsContainer } from "../components/PillsContainer";
import { SelectedItems } from "../components/SelectedItems";
import { SelectedItems2 } from "../components/SelectedItems2";
import { Item } from "../types";

export const LayoutAnimation = () => {
  const [items, setItems] = useState<Item[]>([
    { key: "1", name: "item1" },
    { key: "2", name: "item2" },
    { key: "3", name: "item3" }
  ]);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const resetAll = () => {
    setItems([
      { key: "1", name: "item1" },
      { key: "2", name: "item2" },
      { key: "3", name: "item3" }
    ]);
    setSelectedItems([]);
  };

  const addItem = () => {
    const rand = Math.ceil(Math.random() * 1000);
    const now = new Date().getTime();

    if (items.length === 0) {
      setItems([{ key: `${rand}--${now}`, name: `item0` }]);
      return;
    }

    const pos = rand % items.length;
    const newItem = { key: `${rand}--${now}`, name: `item${pos}` };
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

  const removeItem = (id: string) => {
    setItems((current) => {
      return current.filter((item) => item.key !== id);
    });
  };

  const removeRandomly = () => {
    if (items.length === 0) {
      return;
    }

    const rand = Math.ceil(Math.random() * 1000);
    const pos = rand % items.length;

    setItems((current) => {
      return [
        ...current.slice(0, pos),
        ...current.slice(pos + 1, current.length)
      ];
    });
  };

  return (
    <div className="App">
      <Buttons>
        <Button onClick={addItem}>Add an item</Button>
        <Button onClick={removeRandomly}>Remove an item randomly</Button>
        <Button onClick={resetAll}>reset all</Button>
      </Buttons>
      <AnimateSharedLayout>
        <PillsContainer items={items} selectItem={selectItem} />
        <SelectedItems items={selectedItems} />
      </AnimateSharedLayout>
      <SelectedItems2 items={selectedItems} />
    </div>
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
  padding: 6px 16px;
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
