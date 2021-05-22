import { fireEvent, render } from "@testing-library/react";
import { Dropdown } from "./index";

const OPTIONS = [
  "Option1",
  "Option2",
  "Option3",
];

describe("Dropdown", () => {
  it ("should render without crash", () => {
    const { container } = render(<Dropdown options={OPTIONS} itemToString={v => v} value={""} />);
    const input = container.querySelector("div");
    expect(input).toBeTruthy();
  });

  it ("shoud opens options list on click", () => {
    const { container } = render(
      <>
        <Dropdown
          placeholder={"placeholder"}
          options={OPTIONS}
          itemToString={v => v}
          value={""}
          optionsEntryPoingId="options-entry-point"
        />
        <div id="options-entry-point"/>
      </>
    );

    const dropDownBase = container.querySelector("div");
    expect(dropDownBase).toBeTruthy();
    if (!dropDownBase) throw new Error("No dropdown base found");

    fireEvent.click(dropDownBase);
    expect(container).toMatchSnapshot();

    const portalBase = container.querySelector("#options-entry-point");
    expect(portalBase).toBeTruthy();

    if (!portalBase) throw new Error("No portal base found");
    const list = portalBase.querySelector("ul");
    expect(list).toBeTruthy();
    if (!list) throw new Error("No list found");

    expect(list.children.length).toBe(3);
  });
});
