"use client";

import { CarDetails } from "@/types";

type Props = {
  list: CarDetails[];
};

export default function SearchDropdown({ list }: Props) {
  console.log({ list });
  return (
    <div className="p-3 md:p-5 flex flex-col justify-center bg-white shadow-soft-2 rounded-md mt-1">
      {(!list || list.length <= 0) && <p>No results</p>}
      {list?.map((car) => (
        <div key={car.id}>
          <p>
            <strong>{car.make}</strong> {car.model}
          </p>
        </div>
      ))}
    </div>
  );
}
