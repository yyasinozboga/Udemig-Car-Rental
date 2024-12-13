import React, { ChangeEvent, useState } from "react";
import Select, { SingleValue } from "react-select";
import { fuels, makes } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const selected = { model: model, year: year };
    Object.entries(selected).forEach(([key, value]: any) => {
      if (value) {
        searchParams.set(key, value);
      }
    });

    setSearchParams(searchParams);
    setModel("");
    setYear("");
  };

  interface Options {
    value: string;
    label: string;
  }

  const handleChange = (e: SingleValue<Options>) => {
    if (e) {
      if (e.value === "make") {
        searchParams.set("make", e.label);
      } else {
        if (e.value !== "") {
          searchParams.set("fuel_type", e.value);
        }
      }

      setSearchParams(searchParams);
    }
  };

  const options: Options[] = makes.map((item) => ({
    value: "make",
    label: item,
  }));

  return (
    <div id="filter" className="flex-col max-width my-12">
      <div className="mb-10">
        <h2 className="text-4xl font-medium">Araba Kataloğu</h2>
        <p>Beğenebileceğin arabaları keşfet</p>
      </div>

      <form className="flex justify-between items-center">
        <div className="flex gap-3">
          <Select
            options={options}
            className="text-black w-[400px]"
            placeholder="Ör: Audi"
            onChange={handleChange}
          />
          <input
            type="text"
            id="model"
            placeholder="Ör: Civic"
            className="outline-none text-black px-2 rounded-md w-[400px]"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setModel(e.target.value)
            }
            value={model}
          />
          <button type="submit" onClick={handleClick}>
            <img src="/public/search.svg" alt="search" />
          </button>
        </div>

        <div className="flex gap-3">
          <Select
            options={fuels}
            className="text-black w-[130px]"
            placeholder={fuels[0].label}
            onChange={handleChange}
          />
          <input
            type="text"
            id="year"
            placeholder="Ör 2023"
            className="w-[120px] outline-none text-black px-2 rounded-md"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setYear(e.target.value)
            }
            value={year}
          />
          <button>
            <img
              src="/public/right-arrow.svg"
              alt="right arrow"
              className="size-10"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
