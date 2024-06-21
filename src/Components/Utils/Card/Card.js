import React from "react";
import { NavLink, useParams } from "react-router-dom";

function Card({ dataReciters, dataAllSurah, dataRiwayats }) {
  const { recitersId, riwayatId } = useParams();

  return (
    <>
      <NavLink
        to={(() => {
          if (dataReciters) {
            return `/quran/${dataReciters.id}`;
          } else if (dataRiwayats) {
            return `/quran/${recitersId}/${dataRiwayats.id}`;
          } else if (dataAllSurah) {
            return `/quran/${recitersId}/${riwayatId}/${dataAllSurah.id}`;
          }
        })()}
        className="col-lg-3 col-7"
      >
        <div className="surah mb-3 text-center p-3">
          {(() => {
            if (dataReciters) {
              return <h1>{`${dataReciters.name}`}</h1>;
            } else if (dataRiwayats) {
              return (
                <>
                  {console.log(dataRiwayats)}
                  <h1>{dataRiwayats.name}</h1>
                </>
              );
            } else if (dataAllSurah) {
              return (
                <>
                  <h1>{`${dataAllSurah.name}`}</h1>
                  <p className="m-0">عدد الايات: {dataAllSurah.total_verses}</p>
                </>
              );
            }
          })()}
        </div>
      </NavLink>
    </>
  );
}

export default Card;
