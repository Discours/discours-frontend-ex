import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import App from "./App";

afterEach(cleanup);

beforeEach(() => {
  // Hide warning
  console.warn = jest.fn();
});

describe("App component", () => {
  test("should render without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
    expect(console.warn).toBeCalledTimes(0);
  });
});
