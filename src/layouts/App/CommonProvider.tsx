// File is used to share common provider between App and storybook

import React from "react";
import "src/styles/global.css"; // tslint:disable-line no-import-side-effect

export class CommonProvider extends React.PureComponent {
  public render() {
    return this.props.children;
  }
}

export default CommonProvider;
