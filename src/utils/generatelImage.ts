import { CarType } from "../types";
import { colors } from "./constants";

const getImage = (car: CarType, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("transmission", car.transmission);
  url.searchParams.append("modelYear", String(car.year));
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelVariant", car.class);

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  const i = Math.round(Math.random() * colors.length);

  url.searchParams.append("paintId", colors[i]);

  return url.href;
};

export default getImage;
