import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css";
import "animate.css";
import Modal from "react-modal";
import "rsuite/dist/rsuite.css";

Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
