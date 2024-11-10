"use client";

import { useCars } from "@/queries/cars";
import CarCard from "./CarCard";
import { CarDetails } from "@/types";
import axios from "axios";
import { useState } from "react";

export default function ListCars() {
  const { data, error, isLoading } = useCars(); // Assuming useCars hook also provides isLoading
  const [errorMessage, setErrorMessage] = useState();
  // console.log({ data, error });

  console.log({ data: data?.[1]?.battery?.warranty_period });
  const mutation = `
    mutation {
      ${data
        ?.map(
          (car, index) => `
        car${index}: createCar(
          data: {
            battery: {
              create: {
                architecture: 10,
                cathodeMaterial: "${car.battery.cathode_material}",
                nominalCapacity: ${car.battery.nominal_capacity},
                numberOfCells: ${car.battery.numberof_cells},
                partName: "${car.battery["Name / Reference"]}",
                type: "${car.battery.battery_type}",
                usableCapacity: ${car.battery.useable_capacity},
                voltage: ${car.battery.nominal_voltage}
              }
            },
            make: "${car.make}",
            model: "${car.model}",
            performance: {
              create: {
                power: ${car.performance.total_power},
                timeTo100: ${car.performance.acceleration0100kmh},
                topSpeed: ${car.performance.top_speed},
                torque: ${car.performance.total_torque}
              }
            },
            priceUk: ${car.price.united_kingdom},
            warranty: {
              create: {
                batteryWarrantyMileage: ${car.battery.warranty_mileage},
                batteryWarrantyPeriod: ${car.battery.warranty_period},
                manufacturerWarrantyMileage: ${car.miscellaneous.warranty_period},
                manufacturerWarrantyPeriod: ${car.miscellaneous.warranty_period}
              }
            }
          }
        ) {
          make
          model
        }
      `,
        )
        .join("\n")}
    }
  `;

  async function uploadCarData() {
    console.log({ mutation });
    try {
      await axios.post(
        "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clyfqn5f0007q07ult8ka7bcz/master",
        { query: mutation },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`,
          },
        },
      );
    } catch (error) {
      console.error("Error creating car:", error); // Updated the error message
      setErrorMessage(error.response.data.errors[0]);
      throw error; // Re-throw the error after logging
    }
  }

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display the error message
  }

  return (
    <div className="flex flex-col items-center">
      <button
        className="p-3 rounded-lg color-blue-200 bg-blue-500"
        onClick={uploadCarData}
      >
        PUSH CARS
      </button>
      <strong className="text-blue-500">{JSON.stringify(errorMessage)}</strong>
    </div>
  );
}
