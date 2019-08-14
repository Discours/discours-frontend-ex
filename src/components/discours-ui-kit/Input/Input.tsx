import classnames from "classnames";
import { Field, FieldProps as FormikFieldProps } from "formik";
import React from "react";
import Typography from "src/components/discours-ui-kit/Typography";
import classes from "./Input.css";

interface InputProps {
  isInverse: boolean;
  className: string;
  type: "text" | "email" | "number" | "textarea";
  name: string;
  placeholder: string;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
}

class Input extends React.PureComponent<InputProps> {
  public static defaultProps = {
    isInverse: false,
    className: "",
    type: "text",
  };

  public render() {
    const { name, ...props } = this.props;
    return <Field {...props} name={name} render={this.renderInput} />;
  }

  private renderInput = ({ field, form }: FormikFieldProps) => {
    const { name } = field;
    const { prepend, append, placeholder, type } = this.props;
    const Tag = this.getTagName();
    return (
      <div>
        <div className={classnames(classes.group)}>
          {prepend ? prepend : null}
          <Tag
            className={this.getClassName()}
            placeholder={placeholder}
            type={type}
            {...field}
          />
          {append ? append : null}
        </div>
        <div className={classnames(classes.error)}>
          {form.touched[name] && form.errors[name] && (
            <Typography color="danger" isInline size="small">
              {form.errors[name]}
            </Typography>
          )}
        </div>
      </div>
    );
  };

  private getTagName = () => {
    const { type } = this.props;
    if (type === "textarea") {
      return "textarea";
    }
    return "input";
  };

  private getClassName = () => {
    const { isInverse, className } = this.props;

    return classnames({
      [classes.common]: true,
      [classes.common__inverse]: isInverse,
      [className]: true,
    });
  };
}

export default Input;
