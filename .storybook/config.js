import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import "@storybook/addon-console";
import { MemoryRouter } from "react-router";
import { addParameters } from "@storybook/react";
import CommonProvider from "../src/layouts/App/CommonProvider";
import { withThemes } from "storybook-addon-themes";
import { themes } from "src/config/theme";

addDecorator(
  withInfo({
    inline: false,
  }),
);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withThemes);
addDecorator((story) =>
  React.createElement(
    MemoryRouter,
    {
      initialEntries: ["/"],
    },
    story(),
  ),
);

addParameters({
  themes,
});

addDecorator((story) => React.createElement(CommonProvider, {}, story()));

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
