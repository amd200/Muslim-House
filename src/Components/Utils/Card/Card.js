import React from "react";
import { NavLink, useParams } from "react-router-dom";

function Card({ dataReciters, dataAllSurah, index }) {
  const { recitersId } = useParams();
  return (
    <NavLink
      to={
        dataReciters ? `/quran/${dataReciters.id}` : `/quran/${recitersId}/${dataAllSurah.id}`
      }
      className="col-lg-3 col-7"
    >
      <div className="surah mb-3 text-center p-3">
        {dataReciters ? (
          <h1>{`${dataReciters.name}`}</h1>
        ) : (
          <>
            <h1>{`${dataAllSurah.name}`}</h1>
            <p className="m-0">عدد الايات: {dataAllSurah.total_verses}</p>
          </>
        )}
      </div>
    </NavLink>
  );
}

export default Card;
