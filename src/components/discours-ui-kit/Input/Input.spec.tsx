import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import * as Yup from "yup";
import FormRender from "./__fixtures__/FormRender";
import Input from "./Input";

afterEach(cleanup);

it("should forward className", () => {
  const { getByPlaceholderText } = render(
    <FormRender>
      <Input name="test" className="test" placeholder="Test" />
    </FormRender>,
  );
  const input = getByPlaceholderText("Test");
  expect(input).toHaveClass("test");
});

it("should render textarea if type is textarea", async () => {
  const { getByPlaceholderText } = render(
    <FormRender>
      <Input name="test" placeholder="Test" type="textarea" />
    </FormRender>,
  );
  const input = getByPlaceholderText("Test");
  expect(input).toBeInstanceOf(HTMLTextAreaElement);
});

it("should render input with correct type", () => {
  const { getByPlaceholderText } = render(
    <FormRender>
      <Input name="test" placeholder="Test" type="email" />
    </FormRender>,
  );
  const input = getByPlaceholderText("Test");
  expect(input).toHaveAttribute("type", "email");
  expect(input).toBeInstanceOf(HTMLInputElement);
});

it("should should display error message if validation failed", async () => {
  const validationSchema = Yup.object().shape({
    test: Yup.string().email("Should be email"),
  });
  const { findByText, getByPlaceholderText } = render(
    <FormRender validationSchema={validationSchema}>
      <Input name="test" placeholder="Test" />
    </FormRender>,
  );
  const input = getByPlaceholderText("Test");
  fireEvent.change(input, { target: { value: "foo" } });
  fireEvent.blur(input);
  expect(await findByText("Should be email")).toBeInTheDocument();
});

it("should should display error message if required validation failed", async () => {
  const validationSchema = Yup.object().shape({
    test: Yup.string().required("Required"),
  });
  const { findByText, getByText } = render(
    <FormRender validationSchema={validationSchema}>
      <Input name="test" placeholder="Test" />
    </FormRender>,
  );
  const button = getByText("Submit");
  fireEvent.click(button);
  expect(await findByText("Required")).toBeInTheDocument();
});

it("should should display error message if submitting failed", async () => {
  const { getByText, findByText } = render(
    <FormRender>
      <Input name="test" placeholder="Test" />
    </FormRender>,
  );
  const button = getByText("Submit");
  fireEvent.click(button);
  expect(await findByText("Какая-то ошибочка")).toBeInTheDocument();
});
