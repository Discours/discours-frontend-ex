import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import "@storybook/addon-console";
import { addParameters } from "@storybook/react";
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

addParameters({
  themes,
});

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
