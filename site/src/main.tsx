import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@openwdl/ui/base.css";
import "@openwdl/ui/theme.css";
import "@openwdl/ui/fonts.css";
import "@openwdl/ui/styles.css";
import "./styles/global.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
