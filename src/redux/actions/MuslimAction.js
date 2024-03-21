import {
  AllSurah,
  audio,
  azkarMorning,
  quotes,
  reciters,
  surah,
} from "../types/Types";
import azkars from "../Api/azkar.json";
import quotesJson from "../Api/Quotes.json";
import quran from "../Api/Quran.json";
import axios from "axios";

export const getAllSurah = () => {
  return {
    type: AllSurah,
    data: quran,
  };
};

export const getSurah = () => {
  return {
    type: surah,
    data: quran,
  };
};

export const getAzkarMorning = () => {
  return {
    type: azkarMorning,
    data: azkars.slice(0, 30),
  };
};

export const getAzkarEvening = () => {
  return {
    type: azkarMorning,
    data: azkars.slice(31, 60),
  };
};

export const Quotes = () => {
  return {
    type: quotes,
    data: quotesJson,
  };
};
export const getAllReciters = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://www.mp3quran.net/api/v3/reciters?language=en"
    );
    dispatch({
      type: reciters,
      data: res.data,
    });
  };
};
export const getAllRecitersAudio = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://www.mp3quran.net/api/v3/reciters?language=en&reciter=${id}`
      );

      const server =
        res.data.reciters[0]?.moshaf.find(
          (item) => item.name === "حفص عن عاصم - مرتل"
        )?.server || "";
      dispatch({
        type: audio,
        data: server,
      });
    } catch (error) {
      console.error("Error fetching reciters audio:", error);
    }
  };
};
