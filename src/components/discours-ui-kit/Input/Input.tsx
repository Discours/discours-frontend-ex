import classnames from "classnames";
import React from "react";
import classes from "./Input.css";

interface InputProps {
  isInverse: boolean;
  className: string;
  type: string;
  placeholder: string;
}

class Input extends React.PureComponent<InputProps> {
  public static defaultProps = {
    isInverse: false,
    className: "",
    type: "text",
  };

  public render() {
    const { type, placeholder } = this.props;
    return (
      <input
        className={this.getClassName()}
        placeholder={placeholder}
        type={type}
      />
    );
  }

  private getClassName = () => {
    const { isInverse, className } = this.props;

    return classnames({
      [classes.common]: true,
      [classes.common__inverse]: isInverse,
      [className]: true,
    });
  };
}

export default Input;
