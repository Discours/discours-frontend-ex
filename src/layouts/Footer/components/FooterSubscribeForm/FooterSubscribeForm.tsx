import { Form, Formik, FormikActions, FormikProps } from "formik";
import { T } from "lioness";
import React from "react";
import Button from "src/components/discours-ui-kit/Button";
import Icon, { submit } from "src/components/discours-ui-kit/Icon";
import Input from "src/components/discours-ui-kit/Input";
import Typography from "src/components/discours-ui-kit/Typography";
import * as Yup from "yup";

interface FooterSubscribeFormValues {
  email: string;
}

export interface FooterSubscribeFormProps {
  isSubmitted: boolean;
  onReset(): void;
  onSubmit(
    values: FooterSubscribeFormValues,
    actions: FormikActions<FooterSubscribeFormValues>,
  ): Promise<void>;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Должен быть имэйлом")
    .required("Обязательно"),
});

class FooterSubscribeForm extends React.PureComponent<
  FooterSubscribeFormProps
> {
  public render() {
    return (
      <>
        <Typography isInverse>
          <T message="Подпишитесь на рассылку лучших публикаций" />
        </Typography>
        {this.props.isSubmitted ? (
          this.renderSuccessMessage()
        ) : (
          <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "" }}
            onSubmit={this.props.onSubmit}
            render={this.renderFormik}
          />
        )}
      </>
    );
  }

  private renderSuccessMessage = () => (
    <>
      <Typography font="secondary-italics" isInverse size="small">
        <T message="Спасибо! Ваш адрес добавлен в рассылку!" />{" "}
        <Button
          variant="link-underline"
          isInverse
          isInline
          onClick={this.props.onReset}>
          <T message="Хочу добавить еще один!" />
        </Button>
      </Typography>
    </>
  );

  private renderFormik = ({
    isSubmitting,
  }: FormikProps<FooterSubscribeFormValues>) => (
    <Form style={{ width: "100%" }}>
      <Input
        type="email"
        name="email"
        isInverse
        placeholder="Ваш e-mail"
        append={
          <Button isLoading={isSubmitting} variant="button-regular" isInverse>
            <Icon isInverse component={submit} />
          </Button>
        }
      />
    </Form>
  );
}

export default FooterSubscribeForm;
