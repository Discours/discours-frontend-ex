import * as React from "react";
import classes from "./Typography.css";

class Typography extends React.Component {
  public render() {
    return <p className={classes.text}>{this.props.children}</p>;
  }
}

export default Typography;
