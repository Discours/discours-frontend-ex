import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import Input from "./Input";
afterEach(cleanup);

it("should forward className", async () => {
  const { getByPlaceholderText } = render(
    <Input className="test" placeholder="Test" />,
  );
  const text = getByPlaceholderText("Test");
  expect(text).toHaveClass("test");
});
