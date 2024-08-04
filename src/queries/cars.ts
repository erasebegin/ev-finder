import { fetchCars } from "@/services/cars";
import { queryKeyFactory } from "@/utils/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const carKeys = queryKeyFactory("car");

export const useCars = (
  itemsPerPage: number,
  currentPage: number,
  searchTerm?: string,
) => {
  return useQuery({
    queryKey: carKeys.list({ searchTerm }),
    queryFn: () => fetchCars(itemsPerPage, currentPage, searchTerm),
  });
};
