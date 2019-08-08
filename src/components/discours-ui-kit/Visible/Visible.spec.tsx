import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import Visible from "./Visible";
afterEach(cleanup);

// The breakpoint is and upFrom function arew well tested in
// src/utils/breakpoints
// So in this file we only do several integration tests

it("should not render if only is xs and screen is 1000 width", () => {
  // @ts-ignore
  window.innerWidth = 1000;
  const { queryByText } = render(<Visible only={["xs"]}>test</Visible>);
  expect(queryByText("test")).not.toBeInTheDocument();
});

it("should render if only is xs and screen is 20 width", () => {
  // @ts-ignore
  window.innerWidth = 20;
  const { queryByText } = render(<Visible only={["xs"]}>test</Visible>);
  expect(queryByText("test")).toBeInTheDocument();
});

it("should not render if upFrom is md and screen is 20 width", () => {
  // @ts-ignore
  window.innerWidth = 20;
  const { queryByText } = render(<Visible upFrom="md">test</Visible>);
  expect(queryByText("test")).not.toBeInTheDocument();
});

it("should render if upFrom is md and screen is 1500 width", () => {
  // @ts-ignore
  window.innerWidth = 1500;
  const { queryByText } = render(<Visible upFrom="md">test</Visible>);
  expect(queryByText("test")).toBeInTheDocument();
});

it("should rerender on resize event from window", () => {
  // @ts-ignore
  global.window.innerWidth = 1500; // tslint:disable-line no-unsafe-any
  const { queryByText } = render(<Visible upFrom="md">test</Visible>);
  expect(queryByText("test")).toBeInTheDocument();
  // Simulate window resize event
  // @ts-ignore
  window.innerWidth = 500;
  window.dispatchEvent(new Event("resize"));
  expect(queryByText("test")).not.toBeInTheDocument();
});
