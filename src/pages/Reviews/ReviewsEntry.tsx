import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app/App";
import ReviewsPage from "@/pages/Reviews/ReviewsPage";

import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App currentPage="reviews">
      <ReviewsPage />
    </App>
  </React.StrictMode>,
);
