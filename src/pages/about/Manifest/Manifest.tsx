import React from "react";
import TextView from "src/components/discours-ui-kit/TextView";
import manifest from "./manifest.md";

class Manifest extends React.PureComponent {
  public render() {
    return <TextView html={manifest} />;
  }
}

export default Manifest;
