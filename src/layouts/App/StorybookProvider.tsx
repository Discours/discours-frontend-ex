import React from "react";

import { RawLocaleProvider } from "src/contexts/LocaleContext";

import CommonProvider from "./CommonProvider";

export type StorybookProviderProps = {
  direction: "ltr" | "rtl";
  locale: string;
};

class StorybookProvider extends React.PureComponent<StorybookProviderProps> {
  public render() {
    const { children, direction, locale } = this.props;
    return (
      <RawLocaleProvider
        value={{ direction, locale, changeLocale: this.changeLocale }}>
        <CommonProvider>{children}</CommonProvider>
      </RawLocaleProvider>
    );
  }

  private changeLocale = () => false;
}

export default StorybookProvider;
