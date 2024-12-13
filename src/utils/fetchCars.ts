import { CarType } from "../types";

const options: any = {
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  headers: {
    "x-rapidapi-key": "c3202f5227mshefb2446baaf43e6p1b2232jsn6cc6e405ba66",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

const fetchCars = async (limit: number): Promise<CarType[]> => {
  const url = new URLSearchParams(document.location.search);
  let params = {};
  if (!url.get("make")) {
    params = { make: "BMW", limit: limit };
  }

  for (let [key, value] of url.entries()) {
    params = { ...params, [key]: value, limit: limit };
  }

  const urlString = Object.entries(params)
    .flatMap((param) => [`&${param[0]}=`, param[1]])
    .join("")
    .slice(1);

  try {
    const newUrl = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${urlString}`;
    const res = await fetch(newUrl, options);
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default fetchCars;
