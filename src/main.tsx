import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import "@fontsource/outfit";

declare global {
  interface Window {
    __COVER__: any;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
