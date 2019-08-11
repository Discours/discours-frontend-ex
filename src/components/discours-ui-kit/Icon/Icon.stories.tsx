import { storiesOf } from "@storybook/react";
import React from "react";
import Icon from "./Icon";
import * as icons from "./icons";
import READMEMd from "./README.md";

const stories = storiesOf("discours-ui/Icon", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("sync spinning", () => <Icon src={icons.sync} isSpinning />);

for (const [name, icon] of Object.entries(icons)) {
  stories.add(name, () => <Icon src={icon} />);
  stories.add(`${name} inverse`, () => <Icon isInverse src={icon} />);
}
