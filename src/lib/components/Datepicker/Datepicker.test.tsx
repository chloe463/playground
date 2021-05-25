import { fireEvent, render } from "@testing-library/react";
import { Datepicker } from "./index";

describe("Dropdown", () => {
  it ("should render without crash", () => {
    const onChange = jest.fn();
    const { container } = render(<Datepicker value={new Date(2021, 0, 1)} onChange={onChange} />);
    const input = container.querySelector("div");
    expect(input).toBeTruthy();
  });

  it ("shoud opens options list on click", () => {
    const onChange = jest.fn();
    const { container } = render(
      <>
        <Datepicker
          value={new Date(2021, 0, 1)}
          onChange={onChange}
          calendarEntryPoint="calendar-entry-point"
        />
        <div id="calendar-entry-point"/>
      </>
    );

    const calendarBase = container.querySelector("div");
    expect(calendarBase).toBeTruthy();
    if (!calendarBase) throw new Error("No calendar base found");

    fireEvent.click(calendarBase);
    expect(container).toMatchSnapshot();

    const portalBase = container.querySelector("#calendar-entry-point");
    expect(portalBase).toBeTruthy();

    if (!portalBase) throw new Error("No portal base found");
    const dateButtons = portalBase.querySelectorAll("button");
    expect(dateButtons).toBeTruthy();
    if (!dateButtons) throw new Error("No date buttons found");
    expect(dateButtons.length).toBeGreaterThan(28);
  });
});
