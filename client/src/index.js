//external lib import
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//internal lib import
import App from "./App";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
