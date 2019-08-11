import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import Icon from "./Icon";
import { donate } from "./icons";

afterEach(cleanup);

it("Accessibility: should include aria-hidden attribute", () => {
  const { getByTitle } = render(<Icon src={donate} title="Test" />);
  expect(getByTitle("Test")).toHaveAttribute("aria-hidden", "true");
});

it("Accessibility: should render title in a screen-reader only span", () => {
  // https://fontawesome.com/v4.7.0/accessibility/
  const { getByText } = render(<Icon src={donate} title="Test" />);
  expect(getByText("Test")).toBeInTheDocument();
});
