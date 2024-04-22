import { applyMiddleware, createStore } from "redux";
import { MuslimReducer } from "../reducer/MuslimReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(
  MuslimReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
