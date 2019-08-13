import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { sleep } from "src/utils/timers";
import FooterSubscribeForm, {
  FooterSubscribeFormProps,
} from "./FooterSubscribeForm";

const onReset = action("onReset");

const stories = storiesOf("layouts/Footer/FooterSubscribeForm", module);

const onSubmitFailing: FooterSubscribeFormProps["onSubmit"] = async (
  fields,
  form,
) => {
  await sleep(1000);
  action("submitted");
  form.setSubmitting(false);
  form.setFieldError("email", "Email уже существует");
  throw new Error("Failed!");
};

stories.add("failing", () => (
  <div
    style={{
      backgroundColor: "var(--color-background-inverse)",
      maxWidth: "300px",
    }}>
    <FooterSubscribeForm
      isSubmitted={false}
      onReset={onReset}
      onSubmit={onSubmitFailing}
    />
  </div>
));

const onSubmitSucceeding: FooterSubscribeFormProps["onSubmit"] = async (
  fields,
  form,
) => {
  await sleep(1000);
  action("submitted");
  form.setSubmitting(false);
  form.resetForm();
  return;
};

stories.add("succeeding", () => (
  <div
    style={{
      backgroundColor: "var(--color-background-inverse)",
      maxWidth: "300px",
    }}>
    <FooterSubscribeForm
      isSubmitted={false}
      onReset={onReset}
      onSubmit={onSubmitSucceeding}
    />
  </div>
));

stories.add("succeeded", () => (
  <div
    style={{
      backgroundColor: "var(--color-background-inverse)",
      maxWidth: "300px",
    }}>
    <FooterSubscribeForm
      isSubmitted
      onReset={onReset}
      onSubmit={onSubmitSucceeding}
    />
  </div>
));
