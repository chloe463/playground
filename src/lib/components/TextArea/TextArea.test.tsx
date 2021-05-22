import { render } from "@testing-library/react";
import { TextArea } from "./index";

describe("Textfield", () => {
  it ("should render without crash", () => {
    const { container } = render(<TextArea label={"foo"} />);
    const input = container.querySelector("textarea");
    expect(input).toBeTruthy();
  });
});
