import React from "react";
import Button from "../button";

const Header = () => {
  return (
    <header className="flex-between max-width mb-5">
      <figure className="size-16">
        <img src="/public/bmw.png" alt="logo" className="size-full" />
      </figure>

      <Button title="Kaydol" type="submit" designs="text-white w-32" />
    </header>
  );
};

export default Header;
