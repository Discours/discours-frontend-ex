import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./Button";
import READMEMd from "./README.md";

const stories = storiesOf("discours-ui/Button", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("default", () => (
  <Button>{text("buttonText", "Нажми меня!")}</Button>
));
