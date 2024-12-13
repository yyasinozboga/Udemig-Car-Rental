import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Filter from "../components/filter";
import List from "../components/list";

const Home = () => {
  return (
    <div className="px-10 py-4 text-white">
      <Header />

      <Hero />

      <Filter />

      <List />
    </div>
  );
};

export default Home;
