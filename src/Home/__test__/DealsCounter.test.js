import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import DealsCounter from "../DealsCounter";

test("Deal count initially starts with text of 0", () => {
  const { getByTestId } = render(<DealsCounter />);
});
