import React, { useState } from "react";
import { Snackbar } from "./Snackbar";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/Snackbar",
};

type SnackbarArgs = Pick<React.ComponentProps<typeof Snackbar>, "duration" | "position">;

export const _Default = (args: SnackbarArgs) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsVisible(v => !v)}>Click me to show snackbar</button>
      <Snackbar visible={isVisible} position={args.position} duration={args.duration} onHide={() => setIsVisible(false)}>
        snackbar
      </Snackbar>
    </>
  );
};

_Default.args = {
  position: "bottom-left",
  duration: 3000,
};
_Default.argTypes = {
  position: {
    type: "select",
    options: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
  },
  duration: {
    type: "number",
  },
};
