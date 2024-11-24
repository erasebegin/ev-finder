export const SUPPORTED_LOCALES = ["en", "fr", "es"] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export type LanguageStrings = {
  [key: string]:
    | string
    | {
        [key: string]: string;
      };
};

export type LanguageState = {
  strings: LanguageStrings;
  loading: boolean;
  error: Error | null;
  initialLoad: boolean;
  loadLanguage: (locale: SupportedLocale) => Promise<void>;
};
