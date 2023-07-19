import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TastContextProvider } from "./context/TastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TastContextProvider>
      <App />
    </TastContextProvider>
  </React.StrictMode>
);
