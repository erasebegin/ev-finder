import { LanguageState } from "@/types/lang";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useLanguageStore = create<LanguageState>()(
  devtools(
    (set) => ({
      strings: {},
      loading: true,
      error: null,
      initialLoad: false,
      loadLanguage: async (locale) => {
        set({ loading: true, error: null });
        try {
          const languageModule = await import(`../dictionaries/${locale}.json`);
          set({
            strings: languageModule.default,
            loading: false,
            initialLoad: true,
          });
        } catch (err) {
          set({
            error:
              err instanceof Error
                ? err
                : new Error("Failed to load language strings"),
            loading: false,
          });
        }
      },
    }),
    { name: "language-store" },
  ),
);
