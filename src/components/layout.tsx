import { Transition } from "framer-motion";

export const appBaseStyle = `
  block w-4/5
  max-w-[1280px]
  min-w-[720px]
  ml-[max(72px,((100vw-min(max(720px,(100vw-280px)*0.8),1280px))/2)-280px)]
`;

export const selectedItemsContainerStyle = `
  flex items-center my-[64px] p-[24px] w-full min-w-[720px] max-w-[1280px]
  bg-gray-100 rounded shadow-elevation4
  leading-10
  overflow-hidden
  empty:h-24
`;

export const selectedItemPillLayoutAnimatorStyle = `
  shrink-0 ml-2 first-of-type:ml-0
`;

export const selectedItemPillBaseStyle = `
  py-2 px-6 rounded-full
  bg-gray-700
  text-button text-white
  cursor-pointer
`;

export const transition: Transition = {
  ease: [0.3, 0.3, 0.3, 1],
  duration: 0.5,
};
