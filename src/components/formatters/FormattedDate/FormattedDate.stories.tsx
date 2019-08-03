import { date, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import FormattedDate, { DATE_FORMATS } from "./FormattedDate";
import READMEMd from "./README.md";

const stories = storiesOf("formatters/FormattedDate", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

for (const f of DATE_FORMATS) {
  stories.add(f, () => (
    <FormattedDate
      date={new Date(date("date", new Date()))}
      format={select("Format:", DATE_FORMATS, f)}
    />
  ));
}
