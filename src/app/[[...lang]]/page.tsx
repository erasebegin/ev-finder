import ListCars from "./components/ListCars";
import Search from "./components/Search";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  // const carResponse = await uploadData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <Search dict={dict} />
      <ListCars />
      <h1> {dict.welcome} </h1>
    </main>
  );
}
