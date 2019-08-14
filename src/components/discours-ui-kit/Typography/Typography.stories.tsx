import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import READMEMd from "./README.md";
import Typography, { FONTS } from "./Typography";

const stories = storiesOf("discours-ui/Typography", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

for (const font of FONTS) {
  stories.add(font, () => (
    <Typography font={font}>{text("text", "Hello")}</Typography>
  ));
}

stories.add("inverse", () => (
  <Typography isInverse>{text("text", "Hello")}</Typography>
));
stories.add("danger", () => (
  <Typography color="danger">{text("text", "Hello")}</Typography>
));
