import { AllSurah, audio, azkarMorning, quotes, radios, reciters, riwayats, search, surah, videosYoutube } from "../types/Types";
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
    const res = await axios.get("https://www.mp3quran.net/api/v3/reciters?language=ar");
    dispatch({
      type: reciters,
      data: res.data,
    });
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
        })
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

export const prayerTimes = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=5`);
      dispatch({
        type: azan,
        data: res.data.data.timings,
      });
    } catch (error) {
      console.error("Error fetching reciters audio:", error);
    }
  };
};
