import React from "react";
import Button from "../button";
import { motion } from "framer-motion";

const Hero = () => {
  const scroll = () => {
    const filter = document.querySelector("#filter");

    filter?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex flex-col gap-5">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>

        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>

        <Button
          handleClick={scroll}
          title="Arabaları Keşfet"
          type="submit"
          designs="w-40"
        />
      </div>

      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          animate={{ translateX: 0, scale: 1.15 }}
          transition={{ duration: 0.6 }}
          src="/public/hero.png"
          alt="hero-bg"
          className="object-contain size-full"
        />
      </div>
    </div>
  );
};

export default Hero;
