import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import * as Yup from "yup";
import Button from "../Button"; // tslint:disable-line no-relative-imports
import FormRender from "./__fixtures__/FormRender";
import Input from "./Input";
import READMEMd from "./README.md";

const stories = storiesOf("discours-ui/Input", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("default", () => (
  <FormRender>
    <Input name="test" placeholder={text("placeholder", "Имя твоё")} />
  </FormRender>
));

stories.add("inverse", () => (
  <FormRender>
    <Input
      name="test"
      isInverse
      placeholder={text("placeholder", "Имя твоё")}
    />
  </FormRender>
));

const requiredValidation = Yup.object().shape({
  test: Yup.string().required("Required"),
});

stories.add("with required validation", () => (
  <FormRender validationSchema={requiredValidation}>
    <Input name="test" placeholder={text("placeholder", "Имя твоё")} />
  </FormRender>
));

const emailValidation = Yup.object().shape({
  test: Yup.string().email("Should be email"),
});

stories.add("with email validation", () => (
  <FormRender validationSchema={emailValidation}>
    <Input name="test" placeholder={text("placeholder", "Имя твоё")} />
  </FormRender>
));

stories.add("with append", () => (
  <FormRender>
    <Input
      name="test"
      placeholder={text("placeholder", "Имя твоё")}
      append={
        <Button variant="button-regular" type="submit">
          Go
        </Button>
      }
    />
  </FormRender>
));

stories.add("with append inverse", () => (
  <FormRender>
    <Input
      name="test"
      placeholder={text("placeholder", "Имя твоё")}
      isInverse
      append={
        <Button isInverse variant="button-regular" type="submit">
          Go
        </Button>
      }
    />
  </FormRender>
));

stories.add("with prepend", () => (
  <FormRender>
    <Input
      name="test"
      placeholder={text("placeholder", "Имя твоё")}
      prepend={
        <Button isInverse isLoading variant="button-regular" type="submit">
          Go
        </Button>
      }
    />
  </FormRender>
));

stories.add("with prepend inverse", () => (
  <FormRender>
    <Input
      name="test"
      placeholder={text("placeholder", "Имя твоё")}
      prepend={
        <Button isLoading variant="button-regular" type="submit">
          Go
        </Button>
      }
    />
  </FormRender>
));
