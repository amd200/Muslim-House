import { AllSurah, audio, azkarMorning, quotes, reciters, riwayats, search, surah, videosYoutube, radios } from "../types/Types";

const initialState = {
  AllSurah: [],
  surah: [],
  azkar: [],
  quotes: [],
  reciters: [],
  riwayats: [],
  youtube: [],
  radios: [],
  audio: "",
  loading: true,
};

export const MuslimReducer = (state = initialState, action) => {
  switch (action.type) {
    case AllSurah:
      return {
        ...state,
        AllSurah: action.data,
        loading: false,
      };
    case surah:
      return {
        ...state,
        surah: action.data,
      };
    case azkarMorning:
      return {
        ...state,
        azkar: action.data,
      };
    case quotes:
      return {
        ...state,
        quotes: action.data,
      };
    case reciters:
      return {
        ...state,
        reciters: action.data,
        loading: false,
      };
    case riwayats:
      return {
        ...state,
        riwayats: action.data,
        loading: false,
      };
    case audio:
      return {
        ...state,
        audio: action.data,
        loading: false,
      };
    case radios:
      return {
        ...state,
        radios: action.data,
        loading: false,
      };
    case search:
      return {
        ...state,
        reciters: action.data,
        loading: false,
      };
    case videosYoutube:
      return {
        ...state,
        youtube: action.data,
        loading: false,
      };
    default:
      return state;
  }
};
