import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
