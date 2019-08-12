import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import FooterSubscribeForm, {
  FooterSubscribeFormProps,
} from "./FooterSubscribeForm";

const onReset = action("onReset");

const stories = storiesOf("layouts/Footer/FooterSubscribeForm", module);

const onSubmitFailing: FooterSubscribeFormProps["onSubmit"] = (
  fields,
  form,
): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      action("submitted");
      form.setSubmitting(false);
      form.setFieldError("email", "Email уже существует");
      reject();
    }, 1000);
  });

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

const onSubmitSucceeding: FooterSubscribeFormProps["onSubmit"] = (
  fields,
  form,
): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      action("submitted");
      form.setSubmitting(false);
      form.resetForm();
      resolve();
    }, 1000);
  });

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
