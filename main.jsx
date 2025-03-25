import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CountdownLightSwitch from "./CountdownLightSwithch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountdownLightSwitch />
  </StrictMode>
);
