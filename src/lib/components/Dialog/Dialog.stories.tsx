/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Dialog, useDialog } from "./";

interface DialogContentProps {
  close: () => void;
}
const DialogContent = ({ close }: DialogContentProps) => {
  return (
    <div className="p-8 w-[720px]">
      <h2 className="text-heading2">Title</h2>
      <p className="mt-2 text-body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium itaque, quae
        voluptatum aliquid rerum cupiditate. Tempora, explicabo sed nesciunt sequi assumenda quam
        magnam, voluptas, ipsum mollitia non molestiae quo?
      </p>
      <div className="flex justify-end mt-4">
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default {
  title: "lib/Dialog",
  component: Dialog,
  render: (args) => {
    const { ref, open, close } = useDialog({});
    const props = {
      ...args,
    };
    return (
      <>
        <button onClick={open}>Click me!</button>
        <Dialog {...props} ref={ref}>
          <DialogContent close={close} />
        </Dialog>
        <button type="button">button 1</button>
        <button type="button">button 2</button>
        <button type="button">button 3</button>
        <button type="button">button 4</button>
        <button type="button">button 5</button>
      </>
    );
  },
} as ComponentMeta<typeof Dialog>;

type DialogStory = ComponentStoryObj<typeof Dialog>;

export const _Default: DialogStory = {
  args: {},
};

export const _Default2: DialogStory = {
  args: {},
  render: (args) => {
    const { ref, open2, close } = useDialog({});
    const props = {
      ...args,
    };
    return (
      <>
        <button onClick={open2}>Click me!</button>
        <Dialog {...props} ref={ref}>
          <DialogContent close={close} />
        </Dialog>
      </>
    );
  },
};
