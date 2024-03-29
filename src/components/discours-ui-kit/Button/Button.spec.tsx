import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Button from "./Button";
afterEach(cleanup);

it("should render Link if to props is passed", async () => {
  const { getByText } = render(
    <MemoryRouter>
      <Button to="dogma">test</Button>
    </MemoryRouter>,
  );
  const button = getByText("test").parentElement;
  expect(button).toBeInstanceOf(HTMLAnchorElement);
  expect(button).not.toHaveAttribute("target", "_blank");
});

it("should render Link with target=blank if external route is passed", async () => {
  const { getByText } = render(
    <MemoryRouter>
      <Button to="twitter">test</Button>
    </MemoryRouter>,
  );
  const button = getByText("test").parentElement;
  expect(button).toHaveAttribute("target", "_blank");
});

it("should render a button if no to is passed", async () => {
  const { getByText } = render(<Button>test</Button>);
  const button = getByText("test").parentElement;
  expect(button).toBeInstanceOf(HTMLButtonElement);
});

it("should render link to help-us page", async () => {
  const { getByText } = render(
    <MemoryRouter>
      <Button to="help">test</Button>
    </MemoryRouter>,
  );
  const button = getByText("test").parentElement;
  expect(button).toHaveAttribute("href", "/help");
});

it("should replace :id to id", async () => {
  const { getByText } = render(
    <MemoryRouter>
      <Button to="ariclesByCategory" toProps={{ id: "3" }}>
        test
      </Button>
    </MemoryRouter>,
  );
  const button = getByText("test").parentElement;
  expect(button).toHaveAttribute("href", "/articles/3");
});

it("should forward className", async () => {
  const { getByText } = render(<Button className="test">Test</Button>);
  const text = getByText("Test").parentElement;
  expect(text).toHaveClass("test");
});

it("should not render the text, when isLoading is true", async () => {
  const { queryByText } = render(<Button isLoading>Test</Button>);
  expect(queryByText("Test")).not.toBeInTheDocument();
});

it("should be disable, when isLoading is true to prevent double click", async () => {
  const { getByTitle } = render(<Button isLoading>Test</Button>);
  const text = getByTitle("Загрузка...");
  const button = text.parentElement;
  expect(button).toHaveAttribute("disabled", "");
});
