"use client";
import { useCars } from "@/queries/cars";

export default function ListCars() {
  const { data, error } = useCars();
  console.log({ data, error });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      CARS
    </div>
  );
}
