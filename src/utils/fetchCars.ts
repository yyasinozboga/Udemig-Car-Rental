import { CarType } from "../types";

const options: any = {
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  headers: {
    "x-rapidapi-key": "ffe5fc4e7fmshf5d3285f861b5a4p1efcbajsn9dced4268bd3",
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
