import Image from "next/image";
import Search from "./Search";

export default function Sidebar() {
  return (
    <aside className="p-3 md:p-5 md:pl-[40px] flex flex-col border border-red">
      <Image
        alt="ev finder logo - inside a purple circle two lightning bolts are running in opposite directions laying flat against each other to form the silhouette of a road with the words ev finder to the right of the circle"
        src="./logo.svg"
        width={130}
        height={46}
      />
      <Search />
    </aside>
  );
}
