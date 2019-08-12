import classnames from "classnames";
import React from "react";
import classes from "./Input.css";

interface InputProps {
  isInverse: boolean;
  name: string;
  className: string;
  type: string;
  placeholder: string;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
}

class Input extends React.PureComponent<InputProps> {
  public static defaultProps = {
    isInverse: false,
    className: "",
    type: "text",
  };

  public render() {
    const { type, placeholder, prepend, append, name } = this.props;
    return (
      <div className={classnames(classes.container)}>
        {prepend ? prepend : null}
        <input
          className={this.getClassName()}
          placeholder={placeholder}
          name={name}
          type={type}
        />
        {append ? append : null}
      </div>
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
