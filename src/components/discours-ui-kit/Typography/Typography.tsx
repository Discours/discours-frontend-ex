import cn from "classnames";
import React from "react";
import classes from "./Typography.css";

export const FONTS = [
  "primary",
  "primary-bold",
  "secondary",
  "secondary-italics",
  "secondary-bold",
  "secondary-bold-italics",
  "inherit",
] as const;

export type TypographyFont = (typeof FONTS)[number];

export interface TypographyProps {
  size: "regular" | "heading1" | "heading3" | "small" | "big" | "inherit";
  semanticLevel: "text" | "heading1" | "heading3";
  font: TypographyFont;
  isInverse: boolean;
  isInline: boolean;
  className: string;
  color: "regular" | "danger" | "inherit";
}

class Typography extends React.PureComponent<TypographyProps> {
  public static defaultProps: TypographyProps = {
    size: "regular",
    semanticLevel: "text",
    font: "primary",
    className: "",
    isInverse: false,
    isInline: false,
    color: "regular",
  };

  public render() {
    const TagName = this.getTagName();
    const className = this.getClassName();
    return <TagName className={className}>{this.props.children}</TagName>;
  }

  private getTagName = () => {
    const { semanticLevel, isInline } = this.props;
    switch (semanticLevel) {
      case "heading1":
        return "h1";
      case "heading3":
        return "h3";
      default:
        return isInline ? "span" : "p";
    }
  };

  private getClassName = () => {
    const {
      size,
      font,
      semanticLevel,
      className,
      isInverse,
      isInline,
      color,
    } = this.props;

    return cn({
      [classes.common]: true,
      [classes[`font__${font}`]]: true,
      [classes[`color__${color}`]]: true,
      [classes.color__inverse]: isInverse,
      [classes.common__inline]: isInline,
      [classes[`size__${size}`]]: true,
      [classes.heading]: semanticLevel.match(/^heading/),
      [className]: true,
    });
  };
}

export default Typography;
