import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReciterAudios, getSurah } from "../redux/actions/MuslimAction";
import React, { useEffect, useState } from "react";
import Audio from "../Components/Audio/Audio";
import elnegm from "../assets/audios/سورة النجم بمقام النهاوند.mp3";

function Read() {
  const [ayahs, setAyahs] = useState([]);
  const [audioSrc, setAudioSrc] = useState("./a.mp3"); 
  const { surahId, recitersId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.surah);
  const serverAudio = useSelector((state) => state.audio);

  useEffect(() => {
    dispatch(getSurah());
    dispatch(getReciterAudios(recitersId));
  }, [dispatch, recitersId]);

  useEffect(() => {
    if (data && data.length > 0) {
      setAyahs(data[surahId - 1]);
    }
  }, [data, surahId, serverAudio]);

  useEffect(() => {
    const specialAudioFiles = {
      "112": {
        "53": elnegm,
      },
    };

    const specialAudioSrc = specialAudioFiles[recitersId]?.[surahId];
    if (specialAudioSrc) {
      setAudioSrc(specialAudioSrc); 
    } else {
      setAudioSrc(`${serverAudio}${surahId}.mp3`);
    }
  }, [recitersId, surahId, serverAudio, audioSrc]);

  return (
    <div className="container mt-4">
      <h3 className="name text-center">سورة {ayahs.name}</h3>
      <div id="quran" className="p-3 mt-4">
        <p id="text2">
          {ayahs.verses &&
            ayahs.verses.map((verse) => (
              <React.Fragment key={verse.id}>
                <span className="quran">{verse.text}</span>
                <span className="icon mx-3">{` \ufd3f${verse.id.toLocaleString(
                  "AR-EG"
                )}\ufd3e `}</span>
              </React.Fragment>
            ))}
        </p>
      </div>
      <Audio src={audioSrc} />
    </div>
  );
}

export default Read;

