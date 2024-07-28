import axios from "axios";

export const fetchCars = async (searchTerm?: string) => {
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
};
