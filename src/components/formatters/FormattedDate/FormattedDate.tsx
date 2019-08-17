import format from "date-fns/format";
import ru from "date-fns/locale/ru/index.js";
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
    return format(date, this.getDateFnsFormatFrom(), {
      locale: ru,
    });
  };

  private getDateFnsFormatFrom = () => {
    // https://date-fns.org/v2.0.0-beta.3/docs/format
    const { format: formatStr } = this.props;
    switch (formatStr) {
      case "date-digits":
        return "P";
      case "date-text":
        return "PPP";
      case "time":
        return "p";
      case "date-time-digits":
        return "P p";
      case "date-time-text":
        return "PPP p";
      case "year":
        return "yyyy";
      default:
        return "P";
    }
  };
}

export default FormattedDate;
