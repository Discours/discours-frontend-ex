import React from "react";
import classes from "./Container.css";

class Container extends React.PureComponent {
  public render() {
    return <div className={classes.container}>{this.props.children}</div>;
  }
}

export default Container;
