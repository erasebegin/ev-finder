"use client";
import { useCars } from "@/queries/cars";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import SearchDropdown from "./SearchDropdown";
import { useLanguageStore } from "@/store/lang";
import { SearchIcon } from "lucide-react";
import FieldWithIcon from "./FieldWithIcon";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const placeholderText = useLanguageStore((state) => state.strings.search);
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 1000, [searchTerm]);
  const { data, error } = useCars(10, 0, debouncedSearchTerm);
  console.log({ searchTerm, debouncedSearchTerm, placeholderText });

  return (
    <div className="pt-[40px] flex flex-col items-center relative">
      <FieldWithIcon
        className="py-1 px-5 rounded-xl h-16 bg-transparent-dark-100 placeholder:text-xl"
        icon={SearchIcon}
        placeholder={(placeholderText as string) || "Search..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* {searchTerm && <SearchDropdown list={data} />} */}
    </div>
  );
}
