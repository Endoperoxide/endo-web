import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import "@/index.css";
import HallOfFamePage from "@/pages/HallOfFame/HallOfFamePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App current="hallOfFame">
      <HallOfFamePage />
    </App>
  </React.StrictMode>,
);
