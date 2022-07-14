//external lib import
import React from "react";
import ReactDOM from "react-dom/client";

//internal lib import
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
