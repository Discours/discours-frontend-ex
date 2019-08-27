import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Button, { VARIANTS } from "./Button";
import READMEMd from "./README.md";

const stories = storiesOf("discours-ui/Button", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

for (const v of VARIANTS) {
  stories.add(`variant/${v}`, () => (
    <Button to="index" variant={v}>
      {text("buttonText", "Нажми меня!")}
    </Button>
  ));

  stories.add(`variant/${v}/inverse`, () => (
    <Button to="index" variant={v} isInverse>
      {text("buttonText", "Нажми меня!")}
    </Button>
  ));
}
