import { storiesOf } from "@storybook/react";
import * as React from "react";
import FooterSupportBanner from "./FooterSupportBanner";
import READMEMd from "./README.md";

const stories = storiesOf("modules/Footer/FooterSupportBanner", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("default", () => <FooterSupportBanner />);
