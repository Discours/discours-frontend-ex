import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Typography, {
  TypographyProps,
} from "src/components/discours-ui-kit/Typography";
import {
  ExternalRoute,
  externalRoutes,
  InternalRoute,
  routes,
} from "src/config/routes";
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
  to?: InternalRoute | ExternalRoute;
  toProps?: {
    [prop: string]: string;
  };
  typographyProps?: Partial<TypographyProps>;
  style?: React.CSSProperties;
  className: string;
  onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
}

class Button extends React.PureComponent<ButtonProps> {
  public static defaultProps: ButtonProps = {
    variant: "link-regular",
    isInverse: false,
    className: "",
  };

  public render() {
    const renderFunction = this.props.to ? this.renderLink : this.renderButton;
    return renderFunction();
  }

  private renderLink = () => {
    const { style } = this.props;

    return (
      <Link
        target={this.getLinkTarget()}
        style={style}
        className={this.getClassName()}
        to={this.getLinkTo()}>
        {this.renderTypography()}
      </Link>
    );
  };

  private getLinkTo = () => {
    const { to, toProps } = this.props;
    if (!to || !routes[to]) {
      throw new Error("Wrong link has been passed");
    }
    let linkTo = routes[to];
    if (!toProps) {
      return linkTo;
    }
    for (const [prop, value] of Object.entries(toProps)) {
      linkTo = linkTo.replace(`:${prop}`, value);
    }
    return linkTo;
  };

  private renderButton = () => {
    const { onClick, style } = this.props;
    return (
      <button style={style} className={this.getClassName()} onClick={onClick}>
        {this.renderTypography()}
      </button>
    );
  };

  private getLinkTarget = () => {
    const { to } = this.props;
    if (!to) {
      return;
    }
    const isExternalLink = Object.keys(externalRoutes).includes(to);
    return isExternalLink ? "_blank" : "_self";
  };

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
    const { variant, isInverse, className } = this.props;

    return classnames({
      [classes.common]: true,
      [classes.common__inverse]: isInverse,
      [classes[variant]]: true,
      [className]: true,
    });
  };
}

export default Button;
