import classnames from "classnames";
import * as React from "react"; // TODO
import classes from "./Typography.css";

interface Props {
  variant?: "body" | "heading3";
  className?: string;
}

class Typography extends React.Component<Props> {
  public render() {
    const TagName = this.getTagName();
    const className = this.getClassName();
    return <TagName className={className}>{this.props.children}</TagName>;
  }

  private getTagName = () => {
    const { variant } = this.props;
    switch (variant) {
      case "body":
        return "p";
      case "heading3":
        return "h3";
      default:
        return "p";
    }
  };

  private getClassName = () => {
    const { variant = "body", className = "" } = this.props;

    return classnames({
      [classes.common]: true,
      [classes.body]: variant === "body",
      [classes.heading]: variant.match(/^heading/),
      [classes.heading3]: variant === "heading3",
      [className]: true,
    });
  };
}

export default Typography;
