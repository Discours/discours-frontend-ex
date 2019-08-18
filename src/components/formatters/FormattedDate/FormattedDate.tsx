import React from "react";

export const DATE_FORMATS = [
  "date-digits",
  "date-text",
  "time",
  "date-time-digits",
  "date-time-text",
  "year",
] as const;

export type FormattedDateDateFormat = (typeof DATE_FORMATS)[number];

export interface FormattedDateProps {
  date: Date;
  format: FormattedDateDateFormat;
}

export class FormattedDate extends React.PureComponent<FormattedDateProps> {
  public render() {
    return this.formatDate();
  }

  private formatDate = () => {
    const { date } = this.props;
    return new Intl.DateTimeFormat("ru", this.getIntlOptions()).format(date);
  };

  private getIntlOptions = (): Intl.DateTimeFormatOptions => {
    const { format: formatStr } = this.props;
    switch (formatStr) {
      case "date-digits":
        return {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        };
      case "date-text":
        return {
          year: "numeric",
          month: "long",
          day: "2-digit",
        };
      case "time":
        return {
          hour: "2-digit",
          minute: "2-digit",
        };
      case "date-time-digits":
        return {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        };
      case "date-time-text":
        return {
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        };
      case "year":
        return {
          year: "numeric",
        };
      default:
        return {};
    }
  };
}

export default FormattedDate;
