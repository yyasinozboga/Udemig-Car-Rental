import React, { useEffect, useRef, useState } from "react";
import { CarType } from "../../types";
import { useSearchParams } from "react-router-dom";
import Card from "../card";
import fetchCars from "../../utils/fetchCars";
import Button from "../button";
import Warning from "./Warning";

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<null | CarType[]>(null);
  const [limit, setLimit] = useState<number>(5);
  const initialReducer = useRef(true);

  useEffect(() => {
    if (!searchParams.get("make")) {
      searchParams.delete("model");
      setSearchParams(searchParams);
    }
  }, []);

  useEffect(() => {
    if (initialReducer.current) {
      initialReducer.current = false;
      return;
    }

    searchParams.delete("model");
    setSearchParams(searchParams);
  }, [searchParams.get("make")]);

  useEffect(() => {
    if (limit > 5) {
      setLimit(5);
    }
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    fetchCars(limit)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [limit, searchParams]);

  return (
    <div className="flex flex-wrap gap-5 max-width">
      {isLoading ? (
        <Warning>Loading...</Warning>
      ) : error ? (
        <Warning>Error!</Warning>
      ) : data?.length === 0 ? (
        <Warning>Seçtiğiniz kategoride bir araba yok!</Warning>
      ) : (
        data?.map((item, key) => <Card key={key} item={item} />)
      )}

      <div className="w-full flex-center py-10">
        {data && data?.length === limit && limit < 30 && (
          <Button
            type="button"
            title="Devamını Yükle"
            handleClick={() => setLimit(limit + 5)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
