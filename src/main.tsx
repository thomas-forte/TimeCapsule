import React from "react";
import ReactDOM from "react-dom/client";

// styles
import "./index.css";
import "@fontsource/oxanium/400.css";

import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
