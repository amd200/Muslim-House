import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAzkarMorning } from "../redux/actions/MuslimAction";
import Zekr from "../Components/Zekr/Zekr";

function AzkarMorning() {
  const [azkar, setAzkar] = useState([]);
  const [azkarCount, setAzkarCount] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.azkar);
  useEffect(() => {
    dispatch(getAzkarMorning());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      setAzkar(data);
    }
  }, [data]);

  const handleDecrement = (index) => {
    setAzkar((zekr) => {
      const newAzkar = [...zekr];
      newAzkar[index] = {
        ...newAzkar[index],
        count: newAzkar[index].count - 1,
      };
      return newAzkar;
    });
  };

  return (
    <div className="azkars-page">
      <section className="azkars">
        <div className="container text-center mt-5">
          <div className="title">
            <h1 className="mb-4">
              {azkar && azkar.length > 0 && azkar[0].category}
            </h1>
            <p className="h4 mb-4 ">عددها {azkar.length} ذكر</p>
          </div>
          <div className="row">
            {azkar &&
              azkar.slice(0, 30).map((azkar, i) => {
                return (
                  <Zekr
                    azkar={azkar}
                    index={i}
                    key={i}
                    handleDecrement={handleDecrement}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AzkarMorning;
