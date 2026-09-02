import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import "./index.css";
import HomePage from "@/pages/Home/HomePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App current="home">
      <HomePage />
    </App>
  </React.StrictMode>,
);
