import { date, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import FormattedDate from "./FormattedDate";
import READMEMd from "./README.md";

const stories = storiesOf("HelloWorld", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("With black message default", () => (
  <FormattedDate
    date={new Date(date("date", new Date()))}
    format={select("Format:", ["P", "PP"], "P")}
  />
));
