import axios from "axios";

export const fetchCars = async () => {
  const response = await axios.post(
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clyfqn5f0007q07ult8ka7bcz/master",
    {
      query: `
	  cars {
	    id
	    make
	    model
	  }
  	`,
    },
  );

  return response;
};
