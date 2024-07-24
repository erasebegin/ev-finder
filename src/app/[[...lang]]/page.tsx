import ListCars from "./components/ListCars";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  console.log({ LANG: lang });
  const dict = lang ? await getDictionary(lang) : await getDictionary("en");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> {dict.welcome} </h1>
      <ListCars />
    </main>
  );
}
