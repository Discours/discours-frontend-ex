export type LocaleCode = "en-GB" | "ru";

export type LocaleDirection = "ltr" | "rtl";

export type Locale = {
  code: LocaleCode;
  englishTitle: string;
  localTitle: string;
  direction?: LocaleDirection;
};

export const LOCALES: Locale[] = [
  {
    code: "ru",
    englishTitle: "Russian",
    localTitle: "Русский",
  },
  {
    code: "en-GB",
    englishTitle: "English",
    localTitle: "English",
  },
];

export const SUPPORTED_LOCALES: LocaleCode[] = LOCALES.map((l) => l.code);

export const DEFAULT_LOCALE: Locale = LOCALES[0];
