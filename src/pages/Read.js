import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReciterAudios, getSurah } from "../redux/actions/MuslimAction";
import React, { useEffect, useState } from "react";
import Audio from "../Components/Audio/Audio";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

function Read() {
  const [ayahs, setAyahs] = useState([]);
  const [hiddenAyahs, setHiddenAyahs] = useState(false);
  let { surahId, recitersId, riwayatId } = useParams();
  const [displayedAyahs, setDisplayedAyahs] = useState([]);

  // ضبط surahId إلى 3 أرقام
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

  // جلب البيانات عند التحميل
  useEffect(() => {
    dispatch(getSurah());
    dispatch(getReciterAudios(recitersId, riwayatId));
  }, [dispatch, recitersId, riwayatId]);

  useEffect(() => {
    if (data && data.length > 0) {
      const selectedSurah = data.find((surah) => surah.id === parseInt(surahId));
      if (selectedSurah) {
        setAyahs(selectedSurah.verses);
      }
    }
  }, [data, surahId, serverAudio]);

  const toggleHideAyahs = () => {
    setHiddenAyahs(!hiddenAyahs);
  };
  const showAyah = (id) => {
    if (ayahs) {
      const ayah = ayahs.find((ayah) => ayah.id === id);
      if (ayah && !displayedAyahs.find((a) => a.id === id)) {
        setDisplayedAyahs((prev) => [...prev, ayah]);
      }
    }
  };
  return (
    <>
      <div className="hidden-ayahs" onClick={toggleHideAyahs}>
        {hiddenAyahs ? <FaEyeSlash /> : <FaEye />}
      </div>

      <div className="container mt-4" style={{userSelect: "none"}}>
        <h3 className="name text-center">سورة {data && data.length > 0 && data[surahId - 1].name}</h3>
        <div id="quran" className="p-3 mt-4">
          <p>
            {ayahs.map((ayah) => (
              <React.Fragment key={ayah.id}>
                {hiddenAyahs ? displayedAyahs.find((a) => a.id === ayah.id) && <span className="quran">{ayah.text}</span> : <span className="quran">{ayah.text}</span>}

                <span onClick={() => showAyah(ayah.id)} className="icon mx-3" style={{ cursor: "pointer" }}>
                  {` \ufd3f${ayah.id.toLocaleString("AR-EG")}\ufd3e `}
                </span>
              </React.Fragment>
            ))}
          </p>
        </div>

        {!hiddenAyahs && <Audio src={serverAudio + surahId + `.mp3`} />}
      </div>
    </>
  );
}

export default Read;
