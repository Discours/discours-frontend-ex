import * as React from "react";

class Typography extends React.Component {
  public render() {
    return <p>{this.props.children}</p>;
  }
}

export { Typography };
