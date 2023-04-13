import TestEvents from "./TestEvents";
import { fireEvent, render } from "@testing-library/react";

describe("test TestEvents", () => {
  it("test button-up", () => {
    const { getByTestId } = render(<TestEvents />);
    fireEvent.click(getByTestId("button-up"));
    expect(getByTestId("counter")).toHaveTextContent('1')
  });
});

describe("test TestEvents", () => {
  it("test button-down", () => {
    const { getByTestId } = render(<TestEvents />);
    fireEvent.click(getByTestId("button-down"));
    expect(getByTestId("counter")).toHaveTextContent('-1')
  });
});


