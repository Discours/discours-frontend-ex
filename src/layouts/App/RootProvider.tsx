import * as React from "react";
import LocaleProvider from "./LocaleProvider";

class RootProvider extends React.PureComponent {
  public render() {
    return <LocaleProvider>{this.props.children}</LocaleProvider>;
  }
}

export default RootProvider;
