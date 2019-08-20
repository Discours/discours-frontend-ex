import { storiesOf } from "@storybook/react";
import React from "react";
import Typography from "src/components/discours-ui-kit/Typography";
import Icon from "./Icon";
import * as icons from "./icons";
import READMEMd from "./README.md";

const stories = storiesOf("discours-ui/Icon", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("sync spinning", () => <Icon component={icons.sync} isSpinning />);
stories.add("in heading1", () => (
  <Typography size="heading1">
    <Icon component={icons.brandTwitter} />
  </Typography>
));

stories.add("with manual fontSize", () => (
  <Icon fontSize="10rem" component={icons.brandTwitter} />
));

for (const [name, icon] of Object.entries(icons)) {
  stories.add(`icon/${name}`, () => <Icon component={icon} />);
  stories.add(`icon/${name}/inverse`, () => (
    <div style={{ backgroundColor: "black" }}>
      <Icon isInverse component={icon} />
    </div>
  ));
}
