import axios from "axios";
import data from "../transformed_ev_data.json";

/* export const fetchCars = async (searchTerm?: string) => {
  try {
    const response = await axios.post(
      "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clyfqn5f0007q07ult8ka7bcz/master",
      {
        query: `
            {
              cars(where: {_search: ${searchTerm || ""}}) {
                id
                make
                model
            }
}
        `,
      },
    );

    console.log({ response });

    const { data } = response;
    if (data.errors) {
      throw new Error(data.errors.map((err) => err.message).join(", "));
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error; // Re-throw the error after logging
  }
}; */

export const fetchCars = async (
  itemsPerPage: number = 10,
  currentPage: number = 0,
  searchTerm: string,
) => {
  const start = currentPage * itemsPerPage;
  const end = currentPage * itemsPerPage + itemsPerPage;

  if (!searchTerm) return data.slice(start, end);

  const carData = data.filter(
    (car) =>
      car.make.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm?.toLowerCase()),
  );

  const totalPages = Math.ceil(carData.length / itemsPerPage);

  console.log({ start, end, searchTerm });
  return carData.slice(start, end);
};
