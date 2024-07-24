import "server-only";

// Define the type for the dictionaries object, which maps locale strings to functions that return promises resolving to the dictionary data.
type Dictionaries = {
  [key: string]: () => Promise<{ [key: string]: string }>;
};

// Create the dictionaries object with functions that import JSON files and return their default exports.
const dictionaries: Dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
};

// Define the type for the locale parameter and the getDictionary function.
export const getDictionary = async (
  locale: keyof typeof dictionaries,
): Promise<{ [key: string]: string }> => {
  return dictionaries[locale]();
};
