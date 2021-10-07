import React from "react";
import Home from "../Home";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Header renders with correct text", () => {
    // const component = render(<Home />);
    // const headerEl = component.getByTestId("header");
  const { getByTestId } = render(<Home />);
  const headerEl = getByTestId("header");

  // expect(headerEl).toHaveTextContent("Deals");
  expect(headerEl.textContent).toBe("Test");
});
