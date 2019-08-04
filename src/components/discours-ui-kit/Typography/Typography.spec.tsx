import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import Typography from "./Typography";

afterEach(cleanup);

it("should forward className", async () => {
  const { getByText } = render(<Typography className="test">Test</Typography>);
  const text = getByText("Test");
  expect(text).toHaveClass("test");
});

it("should render p tag by default", async () => {
  const { getByText } = render(<Typography>Test</Typography>);
  const text = getByText("Test");
  expect(text).toBeInstanceOf(HTMLParagraphElement);
  expect(text).toBeInTheDocument();
  expect(text).toHaveClass("body");
});

it("should render h3 for heading3 variant", async () => {
  const { getByText } = render(
    <Typography variant="heading3">Test</Typography>,
  );
  const text = getByText("Test");
  expect(text).toBeInstanceOf(HTMLHeadingElement);
  expect(text).toBeInTheDocument();
  expect(text).toHaveClass("heading");
  expect(text).toHaveClass("heading3");
});
