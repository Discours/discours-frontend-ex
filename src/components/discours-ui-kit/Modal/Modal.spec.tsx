import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import Modal from "./Modal";
afterEach(cleanup);

const modalContent = "Modal content";

it("should open modal on button click", () => {
  const { getByText } = render(<Modal buttonText="Open">{modalContent}</Modal>);
  fireEvent.click(getByText("Open"));
  expect(getByText(modalContent)).toBeInTheDocument();
});

it("should open modal on close button click", () => {
  const { getByText, queryByText } = render(
    <Modal buttonText="Open">{modalContent}</Modal>,
  );
  fireEvent.click(getByText("Open"));
  expect(getByText(modalContent)).toBeInTheDocument();
  fireEvent.click(getByText("×"));
  expect(queryByText(modalContent)).not.toBeInTheDocument();
});

it("should close modal on Escape click", () => {
  const { getByText, queryByText } = render(
    <Modal buttonText="Open">{modalContent}</Modal>,
  );
  fireEvent.click(getByText("Open"));
  expect(getByText(modalContent)).toBeInTheDocument();
  fireEvent.keyPress(document, {
    code: "Escape",
  });
  expect(queryByText(modalContent)).not.toBeInTheDocument();
});

it("should not render button and open Modal if isOpened is passed", () => {
  const { getByText, queryByText } = render(
    <Modal isOpened buttonText="Open">
      {modalContent}
    </Modal>,
  );
  expect(queryByText("Open")).not.toBeInTheDocument();
  expect(getByText(modalContent)).toBeInTheDocument();
});

it("should fire onModalClosed when closed", () => {
  const spy = jest.fn();
  const { getByText } = render(
    <Modal onModalClosed={spy} buttonText="Open">
      {modalContent}
    </Modal>,
  );
  fireEvent.click(getByText("Open"));
  expect(getByText(modalContent)).toBeInTheDocument();
  fireEvent.click(getByText("×"));
  expect(spy).toHaveBeenCalledTimes(1);
});

it("should close modal on Escape click with isOpened", () => {
  const { getByText, queryByText } = render(
    <Modal buttonText="Open" isOpened>
      {modalContent}
    </Modal>,
  );
  expect(getByText(modalContent)).toBeInTheDocument();
  fireEvent.keyPress(document, {
    code: "Escape",
  });
  expect(queryByText(modalContent)).not.toBeInTheDocument();
});
