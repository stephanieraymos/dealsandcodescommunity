import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import DealsCounter from "../DealsCounter";

test("Deal count initially starts with text of 0", () => {
  const { getByTestId } = render(<DealsCounter />);
  const counterEl = getByTestId("deal-counter");

  expect(counterEl.textContent).toBe("0");
});

test("Input contains initial value of 1", () => {
  const { getByTestId } = render(<DealsCounter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
})

test("Add button renders with +", () => {
  const { getByTestId } = render(<DealsCounter />);
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
})

test("Add button renders with -", () => {
  const { getByTestId } = render(<DealsCounter />);
  const minusBtn = getByTestId("minus-btn");

  expect(minusBtn.textContent).toBe("-");
})