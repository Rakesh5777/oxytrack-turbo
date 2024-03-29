import React from "react";
import ReactDOM from "react-dom/client";
import "@oxytrack/ui/main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "./contexts/themeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
