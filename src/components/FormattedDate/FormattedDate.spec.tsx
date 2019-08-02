import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import FormattedDate from "./FormattedDate";

const date = new Date("2018-02-02");

afterEach(cleanup);
it("should render right date for default locale", () => {
  const { getByText } = render(<FormattedDate date={date} format="P" />);
  expect(getByText("02/02/2018")).toBeInTheDocument();
});

it("should render right date for ru locale", () => {
  const { getByText } = render(
    // @ts-ignore
    <FormattedDate date={date} format="P" locale="ru" />,
  );
  expect(getByText("02.02.2018")).toBeInTheDocument();
});
