import classnames from "classnames";
import React from "react";
import ReactSVG from "react-svg";
import classes from "./Icon.css";

interface IconProps {
  src: string;
  isInverse: boolean;
  isFixedWidth: boolean;
  isInline: boolean;
}

class Icon extends React.Component<IconProps> {
  public static defaultProps = {
    isInverse: false,
    isInline: false,
    isFixedWidth: false,
  };

  public render() {
    const { src } = this.props;
    return (
      <ReactSVG
        afterInjection={this.handleAfterInjection}
        className={this.getClassName()}
        src={src}
        wrapper="span"
      />
    );
  }

  private getClassName = () => {
    const { isInverse, isInline, isFixedWidth } = this.props;

    return classnames({
      [classes.container]: true,
      [classes.container__inverse]: isInverse,
      [classes.container__inline]: isInline,
      [classes.container__fixed_width]: isFixedWidth,
    });
  };

  private handleAfterInjection = (error: Error | null, svg?: Element) => {
    if (!error) {
      return;
    }
    console.error(error);
  };
}

export default Icon;
