import { action } from "@storybook/addon-actions";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import { Calendar } from "./Calendar";
import { Datepicker } from "./index";

export default {
  title: "Datepicker",
};

export const Normal = () => {
  const [value, setValue] = useState(new Date());
  return (
    <Datepicker
      placeholder={"Date"}
      value={value}
      onChange={action("onChange")}
    />
  );
};

export const OnlyCalendar = () => {
  const [value, setValue] = useState(new Date());
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={ref}>base</div>
      <Calendar
        name={"date"}
        placeholder={"date"}
        baseRef={ref}
        innerValue={value}
        min={dayjs("1900-01-01")}
        max={dayjs("2100-12-31")}
        onSelectDate={action("onSelectDate")}
        onClickCancel={action("onClickCancel")}
        onClickOk={action("onClickOk")}
      />
    </>
  );
}
