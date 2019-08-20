import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Icon, { sync } from "src/components/discours-ui-kit/Icon";
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
  "link-text",
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

export interface ButtonProps {
  variant: ButtonVariant;
  isInverse: boolean;
  isInline: boolean;
  isLoading: boolean;
  to?: InternalRoute | ExternalRoute;
  type?: "button" | "submit" | "reset";
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
    isLoading: false,
    isInline: false,
    className: "",
  };

  public render() {
    const renderFunction = this.props.to ? this.renderLink : this.renderButton;
    return renderFunction();
  }

  private renderLink = () => {
    const { style } = this.props;

    return this.isExternalLink() ? (
      <a
        rel="noreferrer"
        href={this.getLinkTo()}
        target="_blank"
        style={style}
        className={this.getClassName()}>
        {this.renderContent()}
      </a>
    ) : (
      <Link style={style} className={this.getClassName()} to={this.getLinkTo()}>
        {this.renderContent()}
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
    const { onClick, style, type, isLoading } = this.props;
    return (
      <button
        style={style}
        className={this.getClassName()}
        onClick={onClick}
        disabled={isLoading}
        type={type}>
        {this.renderContent()}
      </button>
    );
  };

  private isExternalLink = () => {
    const { to } = this.props;
    if (!to) {
      return;
    }
    return Object.keys(externalRoutes).includes(to);
  };

  private renderContent = () => {
    const { children, isInverse, typographyProps, isLoading } = this.props;
    if (isLoading) {
      return (
        <Icon
          component={sync}
          isInverse={isInverse}
          isSpinning
          title="Загрузка..."
        />
      );
    }
    return (
      <Typography
        size="inherit"
        font="inherit"
        isInline
        color="inherit"
        isInverse={isInverse}
        {...typographyProps}>
        {children}
      </Typography>
    );
  };

  private getClassName = () => {
    const { variant, isInverse, className, isInline } = this.props;

    return cn({
      [classes.common]: true,
      [classes.common__inverse]: isInverse,
      [classes.common__inline]: isInline,
      [classes[variant]]: true,
      [className]: true,
    });
  };
}

export default Button;
