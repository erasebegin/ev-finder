import Image from "next/image";

export default function Header() {
  return (
    <header className="p-3 md:p-5 flex justify-center">
      <Image
        alt="ev finder logo with a small blue car inside the lense of a magnifying class"
        src="./ev_finder_logo_desktop.svg"
        width={200}
        height={100}
      />
    </header>
  );
}
