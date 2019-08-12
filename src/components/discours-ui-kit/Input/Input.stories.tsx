import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../Button"; // tslint:disable-line no-relative-imports
import Input from "./Input";
import READMEMd from "./README.md";

const stories = storiesOf("discours-ui/Input", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("default", () => (
  <Input placeholder={text("placeholder", "Имя твоё")} />
));

stories.add("inverse", () => (
  <Input isInverse placeholder={text("placeholder", "Имя твоё")} />
));

stories.add("with append", () => (
  <Input
    placeholder={text("placeholder", "Имя твоё")}
    append={
      <Button variant="button-regular" type="submit">
        Go
      </Button>
    }
  />
));

stories.add("with append inverse", () => (
  <Input
    placeholder={text("placeholder", "Имя твоё")}
    isInverse
    append={
      <Button isInverse variant="button-regular" type="submit">
        Go
      </Button>
    }
  />
));

stories.add("with prepend", () => (
  <Input
    placeholder={text("placeholder", "Имя твоё")}
    prepend={
      <Button isInverse isLoading variant="button-regular" type="submit">
        Go
      </Button>
    }
  />
));

stories.add("with prepend inverse", () => (
  <Input
    placeholder={text("placeholder", "Имя твоё")}
    prepend={
      <Button isLoading variant="button-regular" type="submit">
        Go
      </Button>
    }
  />
));
