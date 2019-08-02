import * as React from "react";

import { RawLocaleProvider } from "src/contexts/LocaleContext";

import LocaleProvider from "./LocaleProvider";

export type StorybookLocaleProviderProps = {
  direction: "ltr" | "rtl";
  locale: string;
};

class StorybookLocaleProvider extends React.PureComponent<
  StorybookLocaleProviderProps
> {
  public render() {
    const { children, direction, locale } = this.props;
    return (
      <RawLocaleProvider
        value={{ direction, locale, changeLocale: this.changeLocale }}>
        <LocaleProvider>{children}</LocaleProvider>
      </RawLocaleProvider>
    );
  }

  private changeLocale = () => false;
}

export default StorybookLocaleProvider;
