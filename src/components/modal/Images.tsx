import React from "react";
import { CarType } from "../../types";
import getImage from "../../utils/generatelImage";

interface Props {
  item: CarType;
}

const Images = ({ item }: Props) => {
  const images: string[] = ["29", "33", "13"];

  return (
    <div className="flex gap-3 items-center h-[120px]">
      {images.map((image, key) => (
        <div key={key} className="py-3 h-full">
          <img src={getImage(item, image)} alt="Car Image" className="h-full" />
        </div>
      ))}
    </div>
  );
};

export default Images;
