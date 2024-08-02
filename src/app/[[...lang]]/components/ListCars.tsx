"use client";
import { useCars } from "@/queries/cars";
import CarCard from "./CarCard";
import { CarDetails } from "@/types";

export default function ListCars() {
  const { data, error } = useCars();
  console.log({ data, error });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.cars?.map((car: CarDetails) => (
        <CarCard carData={car} key={car.id} />
      ))}
    </div>
  );
}
