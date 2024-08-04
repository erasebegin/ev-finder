"use client";
import { useCars } from "@/queries/cars";
import { Dictionary } from "../dictionaries";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import SearchDropdown from "./SearchDropdown";

type Props = {
  dict: Dictionary;
};

export default function Search({ dict }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 1000, [searchTerm]);
  const { data, error } = useCars(10, 0, debouncedSearchTerm);
  console.log({ searchTerm, debouncedSearchTerm });

  return (
    <div className="p-3 md:p-5 flex flex-col items-center">
      <input
        className="p-1 px-5 rounded-md w-[200px] h-16 text-xl"
        placeholder={dict.search || "Search"}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && <SearchDropdown list={data} />}
    </div>
  );
}
