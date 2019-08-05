import classnames from "classnames";
import React from "react";
import Typography, {
  TypographyProps,
} from "src/components/discours-ui-kit/Typography";
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

interface ButtonProps {
  variant: ButtonVariant;
  isInverse: boolean;
  to?: string;
  typographyProps?: TypographyProps;
  onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
}

class Button extends React.Component<ButtonProps> {
  public static defaultProps: ButtonProps = {
    variant: "link-regular",
    isInverse: false,
  };

  public render() {
    const { onClick } = this.props;
    return (
      <button className={this.getClassName()} onClick={onClick}>
        {this.renderTypography()}
      </button>
    );
  }

  private renderTypography = () => {
    const { children, isInverse, typographyProps } = this.props;
    return (
      <Typography
        {...typographyProps}
        isInline
        isInheritColor
        isInverse={isInverse}>
        {children}
      </Typography>
    );
  };

  private getClassName = () => {
    const { variant, isInverse } = this.props;

    return classnames({
      [classes.common]: true,
      [classes.common__inverse]: isInverse,
      [classes[variant]]: true,
    });
  };
}

export default Button;
