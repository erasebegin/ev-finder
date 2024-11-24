import { useEffect } from "react";
import { useLanguageStore } from "@/store/lang";

// For page components that receive locale from params
export const useLanguageFromParams = (locale: string) => {
  const { loadLanguage, strings, loading, error } = useLanguageStore();

  useEffect(() => {
    loadLanguage(locale);
  }, [locale, loadLanguage]);

  return { strings, loading, error };
};

// For client components that need direct access
export const useLanguageString = (key: string) => {
  return useLanguageStore((state) => state.strings[key]);
};
