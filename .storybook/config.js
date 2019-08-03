import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import "@storybook/addon-console";
import StorybookProvider from "src/layouts/App/StorybookProvider";
import messages from "src/i18n/translations.json";
import { SUPPORTED_LOCALES } from "src/config/locales";
import { addParameters } from "@storybook/react";
import { withI18n } from "storybook-addon-i18n";
import { withThemes } from "storybook-addon-themes";
import { themes } from "src/config/theme";

addDecorator(
  withInfo({
    inline: false,
  }),
);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withI18n);
addDecorator(withThemes);

addParameters({
  i18n: {
    provider: StorybookProvider,
    providerProps: {
      messages,
    },
    supportedLocales: SUPPORTED_LOCALES,
  },
  themes,
});

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
