import { storiesOf } from "@storybook/react";
import React from "react";
import { seksILiturgiya } from "./__fixtures__/articles";
import manifest from "./__fixtures__/manifest.md";
import READMEMd from "./README.md";
import TextView from "./TextView";

const stories = storiesOf("discours-ui/TextView", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("manifest", () => <TextView html={manifest} />);
stories.add("articles/seksILiturgiya", () => (
  <TextView html={seksILiturgiya} />
));
