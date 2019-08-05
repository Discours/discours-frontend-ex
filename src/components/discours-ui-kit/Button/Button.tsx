import React from "react";
import classes from "./Button.css";

export const VARIANTS = [
  "link-regular",
  "link-regular-fat",
  "link-underline",
  "link-background",
  "button-regular",
  "button-primary",
  "button-fat",
  "button-corner",
  "button-corner-left",
  "button-corner-right",
] as const;

export type ButtonVariant = (typeof VARIANTS)[number];

interface Props {
  variant: ButtonVariant;
  isInverse?: boolean;
  to?: string;
}

class Button extends React.Component<Props> {
  public static defaultProps: Props = {
    variant: "link-regular",
  };

  public render() {
    return (
      <button className={classes.underlined}>{this.props.children}</button>
    );
  }
}

export default Button;
