import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import FormattedDate from "./FormattedDate";

const date = new Date("2018-02-10");

afterEach(cleanup);
it("should render right date for default locale", () => {
  const { getByText } = render(
    <FormattedDate date={date} format="date-digits" />,
  );
  expect(getByText("10.02.2018")).toBeInTheDocument();
});
