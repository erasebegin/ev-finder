import ListCars from "./components/ListCars";

export default async function Home({ params: { lang } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <ListCars />
    </main>
  );
}
