import { LionessProvider } from "lioness";
import * as React from "react";

import { WithLocale, withLocale } from "src/contexts/LocaleContext";
import translationsJson from "src/i18n/translations.json";

export class LocaleProvider extends React.PureComponent<WithLocale> {
  public render() {
    const { locale } = this.props;
    return (
      <LionessProvider locale={locale} messages={translationsJson}>
        <React.Fragment>{this.props.children}</React.Fragment>
      </LionessProvider>
    );
  }
}

export default withLocale(LocaleProvider);
