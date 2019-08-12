import { Form, Formik, FormikActions, FormikProps } from "formik";
import React from "react";
import * as Yup from "yup";

interface RenderHelperValues {
  test: string;
}

class FormRender extends React.Component<{
  validationSchema?: Yup.MixedSchema;
}> {
  public render() {
    return (
      <Formik
        validationSchema={this.props.validationSchema}
        initialValues={{ test: "" }}
        onSubmit={this.handleSubmit}
        render={this.renderFormik}
      />
    );
  }

  private renderFormik = (formikBag: FormikProps<RenderHelperValues>) => (
    <Form>
      {this.props.children}
      <button type="submit">Submit</button>
    </Form>
  );

  private handleSubmit = (
    values: RenderHelperValues,
    actions: FormikActions<RenderHelperValues>,
  ) => {
    actions.setFieldError("test", "Какая-то ошибочка");
    actions.setSubmitting(false);
    return false;
  };
}

export default FormRender;
