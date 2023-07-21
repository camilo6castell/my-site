import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import "./reset.css";
import "./App.css";
import "./components/header/header.css";
import "./components/avatar/avatar.css";
import "./components/btnAlfa/btnAlfa.css";
import "./components/iconSocial/iconSocial.css";
import "./components/presentation/presentation.css";
import "./components/welcome/welcome.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();