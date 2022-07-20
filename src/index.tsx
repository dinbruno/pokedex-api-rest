import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ApiProvider } from "./contexts/ApiContext";
import { App } from "./pages/App";
import { ThemeContextProvider } from "./contexts/useTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

reportWebVitals();
