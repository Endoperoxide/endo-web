import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import GameReviewPage from "@/pages/GameReview/GameReviewPage";
import "@/index.css";

const slug = document.documentElement.dataset.gameSlug;

if (!slug) {
  throw new Error("Missing game slug.");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App current="reviews">
      <GameReviewPage slug={slug} />
    </App>
  </React.StrictMode>,
);
