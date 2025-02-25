import { Meta, StoryObj } from "@storybook/react";
import { Dialog, useDialog } from "./";

interface DialogContentProps {
  close: () => void;
}
const DialogContent = ({ close }: DialogContentProps) => {
  return (
    <div className="w-[720px] p-8">
      <h2 className="text-heading2">Title</h2>
      <p className="mt-2 text-body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium itaque, quae
        voluptatum aliquid rerum cupiditate. Tempora, explicabo sed nesciunt sequi assumenda quam
        magnam, voluptas, ipsum mollitia non molestiae quo?
      </p>
      <div className="mt-4 flex justify-end">
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default {
  title: "lib/Dialog",
  component: Dialog,
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
} as Meta<typeof Dialog>;

type DialogStory = StoryObj<typeof Dialog>;

export const _Default: DialogStory = {
  args: {},
};

export const _Default2: DialogStory = {
  args: {},
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
