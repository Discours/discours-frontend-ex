import classnames from "classnames";
import React from "react";
import ReactSVG from "react-svg";
import classes from "./Icon.css";

interface IconProps {
  src: string;
  isInverse: boolean;
  isFixedWidth: boolean;
  isInline: boolean;
  isSpinning: boolean;
  /**
   * Required, if Icon has semantic meaning
   */
  title?: string;
}

class Icon extends React.PureComponent<IconProps> {
  public static defaultProps = {
    isInverse: false,
    isInline: false,
    isFixedWidth: false,
    isSpinning: false,
  };

  public render() {
    const { src, title } = this.props;
    return (
      <>
        <ReactSVG
          afterInjection={this.handleAfterInjection}
          aria-hidden="true"
          className={this.getClassName()}
          src={src}
          wrapper="span"
          title={title}
        />
        {this.getSrOnlyTitle()}
      </>
    );
  }

  private getClassName = () => {
    const { isInverse, isInline, isFixedWidth, isSpinning } = this.props;

    return classnames({
      [classes.container]: true,
      [classes.container__inverse]: isInverse,
      [classes.container__spinning]: isSpinning,
      [classes.container__inline]: isInline,
      [classes.container__fixed_width]: isFixedWidth,
    });
  };

  private getSrOnlyTitle = () => {
    const { title } = this.props;
    if (!title) {
      return null;
    }
    return <span className={classnames(classes["sr-only"])}>{title}</span>;
  };

  private handleAfterInjection = (error: Error | null, svg?: Element) => {
    if (!error) {
      return;
    }
    console.error(error);
  };
}

export default Icon;
