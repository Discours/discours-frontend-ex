import React from "react";
import { sleep } from "src/utils/timers";
// tslint:disable-next-line no-relative-imports
import FooterSubscribeForm, {
  FooterSubscribeFormProps,
} from "../components/FooterSubscribeForm";

interface FooterSubscribeFormContainerState {
  isSubmitted: boolean;
}

class FooterSubscribeFormContainer extends React.PureComponent<
  {},
  FooterSubscribeFormContainerState
> {
  public state: FooterSubscribeFormContainerState = {
    isSubmitted: false,
  };
  public render() {
    const { isSubmitted } = this.state;
    return (
      <FooterSubscribeForm
        isSubmitted={isSubmitted}
        onSubmit={this.handleSubmit}
        onReset={this.switchIsSubmitted}
      />
    );
  }

  private switchIsSubmitted = () => {
    this.setState((s) => ({
      isSubmitted: !s.isSubmitted,
    }));
  };

  private handleSubmit: FooterSubscribeFormProps["onSubmit"] = async (
    fields,
    form,
  ) => {
    await sleep(2000);
    form.setSubmitting(false);
    form.resetForm();
    this.switchIsSubmitted();
  };
}

export default FooterSubscribeFormContainer;
