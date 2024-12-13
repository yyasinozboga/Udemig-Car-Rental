import React, { useState } from "react";
import { CarType } from "../../types";
import getImage from "../../utils/generatelImage";
import Info from "./Info";
import Button from "../button";
import { motion } from "framer-motion";
import Modal from "../modal";

interface Props {
  item: CarType;
}

const Card = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const getPrice = Math.floor(Math.random() * 8000) + 2000;

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl w-[450px] h-[450px] p-6 group"
    >
      <h2 className="car-card__content-title text-nowrap">
        {item.make} {item.model}
      </h2>

      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">{getPrice}</span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      <img src={getImage(item)} alt="car-img" />

      <div className="w-full">
        <div className="group-hover:hidden">
          <Info car={item} />
        </div>

        <div className="mt-[4px] hidden group-hover:flex">
          <Button
            designs="w-full py-[25px] text-white"
            title="Daha fazla"
            icon="/right-arrow.svg"
            type="button"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} item={item} />
    </motion.div>
  );
};

export default Card;
