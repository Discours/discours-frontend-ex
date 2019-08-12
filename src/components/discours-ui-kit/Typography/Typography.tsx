import classnames from "classnames";
import React from "react";
import classes from "./Typography.css";

export interface TypographyProps {
  variant: "body" | "heading3" | "small";
  isInverse: boolean;
  isInline: boolean;
  isInheritColor: boolean;
  isItalics: boolean;
  className: string;
  color: "regular" | "danger";
}

class Typography extends React.PureComponent<TypographyProps> {
  public static defaultProps: TypographyProps = {
    variant: "body",
    className: "",
    isInverse: false,
    isInline: false,
    isInheritColor: false,
    isItalics: false,
    color: "regular",
  };

  public render() {
    const TagName = this.getTagName();
    const className = this.getClassName();
    return <TagName className={className}>{this.props.children}</TagName>;
  }

  private getTagName = () => {
    const { variant, isInline } = this.props;
    switch (variant) {
      case "heading3":
        return "h3";
      default:
        return isInline ? "span" : "p";
    }
  };

  private getClassName = () => {
    const {
      variant,
      className,
      isInverse,
      isInline,
      color,
      isInheritColor,
      isItalics,
    } = this.props;

    return classnames({
      [classes.common]: true,
      [classes.common__italics]: isItalics,
      [classes.common__danger]: color === "danger",
      [classes.common__inverse]: isInverse,
      [classes.common__inline]: isInline,
      [classes.common__inherit]: isInheritColor,
      [classes.body]: variant === "body",
      [classes.heading]: variant.match(/^heading/),
      [classes.heading3]: variant === "heading3",
      [classes.small]: variant === "small",
      [className]: true,
    });
  };
}

export default Typography;
