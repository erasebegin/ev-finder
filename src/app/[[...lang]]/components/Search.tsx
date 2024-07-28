"use client";
import { useCars } from "@/queries/cars";
import { Dictionary } from "../dictionaries";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

type Props = {
  dict: Dictionary;
};

export default function Search({ dict }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 1000);
  const { data, error } = useCars(debouncedSearchTerm);

  return (
    <div className="p-3 md:p-5 flex justify-center">
      <input
        placeholder={dict.search || "Search"}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
