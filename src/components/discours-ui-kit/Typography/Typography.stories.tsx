import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import READMEMd from "./README.md";
import Typography from "./Typography";

const stories = storiesOf("discours-ui/Typography", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("default", () => <Typography>{text("text", "Hello")}</Typography>);
stories.add("inverse", () => (
  <Typography isInverse>{text("text", "Hello")}</Typography>
));
