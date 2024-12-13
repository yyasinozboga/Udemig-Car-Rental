import React from "react";
import { CarType } from "../../types";
import { motion, AnimatePresence } from "framer-motion";
import getImage from "../../utils/generatelImage";
import Images from "./Images";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  item: CarType;
}

const Modal = ({ isOpen, onClose, item }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 grid place-items-center backdrop-blur">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-[500px] h-[90%] rounded-lg p-5 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-0 right-0 rounded-full size-10 flex justify-center items-center bg-white"
            >
              <img src="/close.svg" alt="close" />
            </button>

            <div className="bg-blue-500 rounded-lg flex justify-center items-center h-[200px]">
              <img
                src={getImage(item)}
                alt="car image"
                className="size-80 object-contain"
              />
            </div>

            <Images item={item} />

            <div className="flex-col">
              {Object.entries(item).map(([key, value], index) => (
                <div key={index} className="flex justify-between py-2.5">
                  <span className="capitalize font-semibold">
                    {key.split("_").join(" ")}
                  </span>
                  <span className="font-semibold capitalize">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
