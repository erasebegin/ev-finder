import "server-only";

// Define the interface for the dictionary data.
export interface Dictionary {
  [key: string]: string;
}

// Define the type for the dictionaries object, which maps locale strings to functions that return promises resolving to the dictionary data.
type Dictionaries = {
  [key: string]: () => Promise<Dictionary>;
};

// Create the dictionaries object with functions that import JSON files and return their default exports.
const dictionaries: Dictionaries = {
  en: () =>
    import("@/dictionaries/en.json").then(
      (module) => module.default as Dictionary,
    ),
  de: () =>
    import("@/dictionaries/de.json").then(
      (module) => module.default as Dictionary,
    ),
};

// Define the type for the locale parameter and the getDictionary function.
export const getDictionary = async (
  locale: keyof typeof dictionaries,
): Promise<Dictionary> => {
  if (!locale || locale !== ("en" || "de")) return dictionaries["en"]();

  return dictionaries[locale]();
};
