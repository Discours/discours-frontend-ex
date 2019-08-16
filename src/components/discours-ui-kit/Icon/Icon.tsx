import classnames from "classnames";
import React from "react";
import classes from "./Icon.css";
export * from "./icons";

interface IconProps {
  component: React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  isInverse: boolean;
  isFixedWidth: boolean;
  isSpinning: boolean;
  /**
   * Required, if Icon has semantic meaning
   */
  title?: string;
  fontSize?: string;
}

class Icon extends React.PureComponent<IconProps> {
  public static defaultProps = {
    isInverse: false,
    isFixedWidth: false,
    isSpinning: false,
  };

  public render() {
    const { component: Component, title } = this.props;
    return (
      <>
        <Component
          className={this.getClassName()}
          aria-hidden="true"
          style={this.getStyle()}
          title={title}
        />

        {this.getSrOnlyTitle()}
      </>
    );
  }

  private getStyle = () => {
    const { fontSize } = this.props;
    return { fontSize };
  };

  private getClassName = () => {
    const { isInverse, isFixedWidth, isSpinning } = this.props;

    return classnames({
      [classes.container]: true,
      [classes.container__inverse]: isInverse,
      [classes.container__spinning]: isSpinning,
      [classes.container__fixed_width]: isFixedWidth,
    });
  };

  private getSrOnlyTitle = () => {
    const { title } = this.props;
    if (!title) {
      return null;
    }
    return <span className={classnames("sr-only")}>{title}</span>;
  };
}

export default Icon;
