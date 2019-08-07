import { storiesOf } from "@storybook/react";
import React from "react";
import READMEMd from "./README.md";
import Visible from "./Visible";

const stories = storiesOf("discours-ui/Visible", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("only mobile", () => (
  <Visible only={["xs"]}>Видно только на мобиле</Visible>
));

stories.add("only medium desktop", () => (
  <Visible only={["md"]}>Видно только на десктопе среднего размера</Visible>
));

stories.add("only desktop", () => (
  <Visible upFrom="md">Видно только на десктопе</Visible>
));

stories.add("only mobile and table", () => (
  <Visible only={["xs", "sm"]}>Видно только на мобиле и планшете</Visible>
));
