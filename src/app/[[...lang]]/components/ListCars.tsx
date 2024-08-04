"use client";

import { useCars } from "@/queries/cars";
import CarCard from "./CarCard";
import { CarDetails } from "@/types";

export default function ListCars() {
  const { data, error, isLoading } = useCars(); // Assuming useCars hook also provides isLoading
  console.log({ data, error });

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display the error message
  }

  return (
    <div className="flex flex-col items-center">
      {data?.map((car: CarDetails) => <CarCard carData={car} key={car.id} />)}
    </div>
  );
}
