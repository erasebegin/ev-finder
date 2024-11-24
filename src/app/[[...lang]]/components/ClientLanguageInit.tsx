import { SupportedLocale } from "@types/lang";
import { useEffect } from "react";
import { useLanguageStore } from "@/store/lang";

export default function ClientLanguageInit({
  locale,
  children,
}: {
  locale: SupportedLocale;
  children: React.ReactNode;
}) {
  const loadLanguage = useLanguageStore((state) => state.loadLanguage);
  const initialLoad = useLanguageStore((state) => state.initialLoad);

  useEffect(() => {
    if (!initialLoad) {
      loadLanguage(locale);
    }
  }, [locale, loadLanguage, initialLoad]);

  return <>{children}</>;
}
