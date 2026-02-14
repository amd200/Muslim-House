import { AllSurah, audio, azkarMorning, AzkarPrayer, quotes, radios, reciters, riwayats, search, surah, videosYoutube } from "../types/Types";
import axios from "axios";

export const getAllSurah = () => {
  return {
    type: AllSurah,
    data: require("../Api/Quran.json"),
  };
};

export const getSurah = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${process.env.PUBLIC_URL}/Quran.json`);
      const data = await res.json();
      dispatch({
        type: surah,
        data: data,
      });
    } catch (error) {
      console.error("Error fetching Surah:", error);
    }
  };
};

export const getAzkarMorning = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${process.env.PUBLIC_URL}/azkar.json`);
      const data = await res.json();
      dispatch({
        type: azkarMorning,
        data: data.slice(0, 30), // تقسيم البيانات هنا كما كنت تفعل سابقًا
      });
    } catch (error) {
      console.error("Error fetching Azkar Morning:", error);
    }
  };
};

export const getAzkarEvening = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${process.env.PUBLIC_URL}/azkar.json`);
      const data = await res.json();
      dispatch({
        type: azkarMorning,
        data: data.slice(31, 60), // تقسيم البيانات هنا كما كنت تفعل سابقًا
      });
    } catch (error) {
      console.error("Error fetching Azkar Evening:", error);
    }
  };
};

export const getAzkarPrayer = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${process.env.PUBLIC_URL}/azkarPrayer.json`);
      const data = await res.json();
      dispatch({
        type: AzkarPrayer,
        data: data,
      });
    } catch (error) {
      console.error("Error fetching Azkar Prayer:", error);
    }
  };
};

export const Quotes = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${process.env.PUBLIC_URL}/Quotes.json`);
      const data = await res.json();
      dispatch({
        type: quotes,
        data: data,
      });
    } catch (error) {
      console.error("Error fetching Quotes:", error);
    }
  };
};
export const getAllReciters = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://www.mp3quran.net/api/v3/reciters?language=ar");
      dispatch({
        type: reciters,
        data: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getReciterAudios = (id, riwaya) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${id}&rewaya=${riwaya}`);
      const server = res.data.reciters[0].moshaf.find((item) => item.id == riwaya).server;
      dispatch({
        type: audio,
        data: server,
      });
    } catch (error) {
      console.error("Error fetching reciters audio:", error);
    }
  };
};

export const getAllRiwayats = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${id}`);
      console.log(res);
      dispatch({
        type: riwayats,
        data: res.data,
      });
    } catch (error) {
      console.error("Error fetching reciters audio:", error);
    }
  };
};
export const getAllRadios = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://mp3quran.net/api/v3/radios?language=ar`);

      dispatch({
        type: radios,
        data: res.data.radios,
      });
    } catch (error) {
      console.error("Error fetching reciters audio:", error);
    }
  };
};
export const searchReciters = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${id}`);

      dispatch({
        type: search,
        data: res.data,
      });
    } catch (error) {
      console.error("Error fetching reciters audio:", error);
    }
  };
};

export const youtube = (playlistIds) => {
  const apiKey = "AIzaSyAWAS18XVcqhSjRhvyzVxqfwBti6WfpEiM";
  return async (dispatch) => {
    try {
      const allPlaylistsData = await Promise.all(
        playlistIds.map(async (playlistId) => {
          const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`);
          return res.data.items;
        }),
      );

      dispatch({
        type: videosYoutube,
        data: allPlaylistsData.flat(),
      });
    } catch (error) {
      console.error("Error fetching reciters audio:", error);
    }
  };
};

// export const prayerTimes = (latitude, longitude) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=5`);
//       dispatch({
//         type: azan,
//         data: res.data.data.timings,
//       });
//     } catch (error) {
//       console.error("Error fetching reciters audio:", error);
//     }
//   };
// };
