import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SearchProvider } from "./context/SearchContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>
);