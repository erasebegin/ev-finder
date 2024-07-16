import { fetchCars } from "@/services/cars";
import { queryKeyFactory } from "@/utils/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const carKeys = queryKeyFactory("car");

export const useCars = () => {
  return useQuery({
    queryKey: carKeys.all,
    queryFn: () => fetchCars(),
  });
};
