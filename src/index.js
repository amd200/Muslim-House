import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./App.css"
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {store} from "./redux/store/store";
import { Provider } from "react-redux";
import "./assets/css/style.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
