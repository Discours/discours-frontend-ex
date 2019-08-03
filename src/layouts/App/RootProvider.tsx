import * as React from "react";
import CommonProvider from "./CommonProvider";

class RootProvider extends React.PureComponent {
  public render() {
    return <CommonProvider>{this.props.children}</CommonProvider>;
  }
}

export default RootProvider;
