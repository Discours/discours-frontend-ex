import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import FormattedDate from "./FormattedDate";

const date = Date.UTC(2018, 1, 10, 14, 42);

afterEach(cleanup);
it("should format date with date-digits format", () => {
  const { getByText } = render(
    <FormattedDate date={date} format="date-digits" />,
  );
  expect(getByText("10.02.2018")).toBeInTheDocument();
});

it("should format date with date-text format", () => {
  const { getByText } = render(
    <FormattedDate date={date} format="date-text" />,
  );
  expect(getByText("10-е февраля 2018 г.")).toBeInTheDocument();
});

it("should format date with time format", () => {
  const { getByText } = render(<FormattedDate date={date} format="time" />);
  expect(getByText("14:42")).toBeInTheDocument();
});

it("should format date with date-time-digits format", () => {
  const { getByText } = render(
    <FormattedDate date={date} format="date-time-digits" />,
  );
  expect(getByText("10.02.2018 14:42")).toBeInTheDocument();
});

it("should format date with date-time-text format", () => {
  const { getByText } = render(
    <FormattedDate date={date} format="date-time-text" />,
  );
  expect(getByText("10-е февраля 2018 г. 14:42")).toBeInTheDocument();
});

it("should format date with year format", () => {
  const { getByText } = render(<FormattedDate date={date} format="year" />);
  expect(getByText("2018")).toBeInTheDocument();
});
