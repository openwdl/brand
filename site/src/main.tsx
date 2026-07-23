import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@openwdl/ui/fonts.css";
import "@openwdl/ui/theme.css";
import "@openwdl/ui/base.css";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
