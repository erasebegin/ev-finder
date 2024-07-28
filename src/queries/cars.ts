import { fetchCars } from "@/services/cars";
import { queryKeyFactory } from "@/utils/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const carKeys = queryKeyFactory("car");

export const useCars = (searchTerm?: string) => {
  return useQuery({
    queryKey: carKeys.list({ searchTerm }),
    queryFn: () => fetchCars(searchTerm),
  });
};
