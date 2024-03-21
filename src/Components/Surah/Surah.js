import React from "react";
import { NavLink } from "react-router-dom";

function Surah({ title, ayasNumber, id }) {
  return (
    <NavLink to={`/QuranPage`} className="col-lg-3 col-7">
      <div className="surah mb-3 text-center p-3">
        <h1>{title}</h1>
        <p className="m-0">عدد الايات: {ayasNumber}</p>
      </div>
    </NavLink>
  );
}

export default Surah;
