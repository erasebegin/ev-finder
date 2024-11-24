"use client";

import { useCars } from "@/queries/cars";
import CarCard from "./CarCard";
import { CarDetails } from "@/types";
import axios from "axios";
import { useState } from "react";

export default function ListCars() {
  const { data, error, isLoading } = useCars(); // Assuming useCars hook also provides isLoading
  const [errorMessage, setErrorMessage] = useState();

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display the error message
  }

  return (
    <div className="flex flex-col items-center">
      <h1>LIST CARS</h1>
    </div>
  );
}
