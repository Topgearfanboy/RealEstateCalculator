import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import React from "react";
import { AppContainer } from "./AppContainer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
