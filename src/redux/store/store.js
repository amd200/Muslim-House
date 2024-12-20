import { applyMiddleware, createStore } from "redux";
import { MuslimReducer } from "../reducer/MuslimReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
export const store = createStore(MuslimReducer, composeWithDevTools(applyMiddleware(thunk)));
