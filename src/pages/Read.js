import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReciterAudios, getSurah } from "../redux/actions/MuslimAction";
import React, { useEffect, useState } from "react";
import Audio from "../Components/Audio/Audio";

function Read() {
  const [ayahs, setAyahs] = useState([]);
  let { surahId, recitersId, riwayatId } = useParams();
  if (surahId < 10) {
    surahId = `00${surahId}`;
  } else if (surahId < 100) {
    surahId = `0${surahId}`;
  } else {
    surahId = `${surahId}`;
  }
  const dispatch = useDispatch();
  const data = useSelector((state) => state.surah);
  const serverAudio = useSelector((state) => state.audio);
  useEffect(() => {
    dispatch(getSurah());
    dispatch(getReciterAudios(recitersId, riwayatId));
  }, [dispatch, recitersId]);

  useEffect(() => {
    if (data && data.length > 0) {
      setAyahs(data[surahId - 1]);
    }
  }, [data, surahId, serverAudio]);
  return (
    <div className="container mt-4">
      <h3 className="name text-center">سورة {ayahs.name}</h3>
      <div id="quran" className=" p-3 mt-4">
        <p id="text2">
          {ayahs.verses ? (
            ayahs.verses.map((verse) => (
              <React.Fragment key={verse.id}>
                <span className="quran">{verse.text}</span>
                <span className="icon mx-3">{` \ufd3f${verse.id.toLocaleString("AR-EG")}\ufd3e `}</span>
              </React.Fragment>
            ))
          ) : (
            <div class="spinner-border text-success my-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </p>
      </div>
      <Audio src={serverAudio + surahId + `.mp3`} />
    </div>
  );
}

export default Read;
