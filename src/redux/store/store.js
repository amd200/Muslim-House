import { applyMiddleware, createStore } from "redux";
import { MuslimReducer } from "../reducer/MuslimReducer";
import { thunk } from "redux-thunk";
export const store = createStore(MuslimReducer);
