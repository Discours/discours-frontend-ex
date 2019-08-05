import format from "date-fns/format";
import React from "react";

import { WithLocale, withLocale } from "src/contexts/LocaleContext";
import { DATE_FNS_LOCALES, getDateFnsLocale } from "src/utils/locale";

export const DATE_FORMATS = [
  "date-digits",
  "date-text",
  "time",
  "date-time-digits",
  "date-time-text",
] as const;

export type FormattedDateDateFormat = (typeof DATE_FORMATS)[number];

export interface FormattedDateProps extends WithLocale {
  date: Date;
  format: FormattedDateDateFormat;
}

export class FormattedDate extends React.Component<FormattedDateProps> {
  public render() {
    return this.formatDate();
  }

  private formatDate = () => {
    const { date, locale } = this.props;
    return format(date, this.getDateFnsFormatFrom(), {
      locale: DATE_FNS_LOCALES[getDateFnsLocale(locale)],
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
      default:
        return "P";
    }
  };
}

export default withLocale(FormattedDate);
