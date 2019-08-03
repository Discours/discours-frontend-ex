import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Container from "./Container";
import READMEMd from "./README.md";

const stories = storiesOf("discours-ui/Container", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("default", () => (
  <Container>
    <div
      style={{
        border: "1px solid black",
        width: "100%",
      }}>
      {text("text", "Граница контейнера")}
    </div>
  </Container>
));
