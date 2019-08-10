import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Input from "./Input";
import READMEMd from "./README.md";

const stories = storiesOf("discours-ui/Input", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("default", () => (
  <Input placeholder={text("placeholder", "Имя твоё")} />
));

stories.add("inverse", () => (
  <Input isInverse placeholder={text("placeholder", "Имя твоё")} />
));
