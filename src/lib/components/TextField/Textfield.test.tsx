import { render } from "@testing-library/react";
import { TextField } from "./index";

describe("Textfield", () => {
  it("should render without crash", () => {
    const { container } = render(<TextField label={"foo"} />);
    const input = container.querySelector("input");
    expect(input).toBeTruthy();
  });
});
