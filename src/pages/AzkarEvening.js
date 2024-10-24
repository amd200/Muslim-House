import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAzkarEvening } from "../redux/actions/MuslimAction";
import Zekr from "../Components/Zekr/Zekr";

function AzkarEvening() {
  const [azkar, setAzkar] = useState([]);
  const [azkarCount, setAzkarCount] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.azkar);
  useEffect(() => {
    dispatch(getAzkarEvening());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      setAzkar(data);
      console.log(azkar);
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
    <main className="azkars-page">
        <section className="azkars">
      <div className="container text-center mt-5">
        <div className="title">
          <h1 className="mb-4 color">
            {azkar && azkar.length > 0 && azkar[0].category}
          </h1>
          <p className="h4 mb-4 color">عددها {azkar.length} ذكر</p>
        </div>
        <div className="row">
          {azkar &&
            azkar.slice(0, 30).map((azkar, i) => {
              return (
                <div className="col-12">
                  <Zekr
                    azkar={azkar}
                    index={i}
                    key={i}
                    handleDecrement={handleDecrement}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
    </main>
  
  );
}

export default AzkarEvening;
