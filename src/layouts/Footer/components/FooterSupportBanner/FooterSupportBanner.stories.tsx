import { storiesOf } from "@storybook/react";
import React from "react";
import FooterSupportBanner from "./FooterSupportBanner";
import READMEMd from "./README.md";

const stories = storiesOf("layouts/Footer/FooterSupportBanner", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("default", () => <FooterSupportBanner />);
