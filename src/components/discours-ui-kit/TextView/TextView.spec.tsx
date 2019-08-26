import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import renderWithRouter from "__utils__/renderWithRouter";
import React from "react";
import TextView from "./TextView";

afterEach(cleanup);

it("should add target='_blank' to all the links provided", () => {
  const html = `
    <p>Some text</p>
    <a href="https://ya.ru">Yandex</a>
    <a href="https://google.ru">Google</a>
    <a href="https://goooseman.ru">Goooseman</a>
  `;
  const { getByText } = render(<TextView html={html} />);
  expect(getByText("Yandex")).toHaveAttribute("target", "_blank");
  expect(getByText("Google")).toHaveAttribute("target", "_blank");
  expect(getByText("Goooseman")).toHaveAttribute("target", "_blank");
});

it("should open a SendContentItemModal on #send link click", () => {
  const html = `
    <a href="#send">Открыть</a>
  `;
  const { getByText } = renderWithRouter(<TextView html={html} />);
  fireEvent.click(getByText("Открыть"));
  expect(getByText("Опубликовать материал")).toBeInTheDocument();
});
