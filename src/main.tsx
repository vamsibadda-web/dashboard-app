import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import { MantineProvider } from "@mantine/core";
import { ThemeProviderCustom } from "./context/ThemeContext";
import "./index.css";

const router = createRouter({
  routeTree,
});



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles={false} withNormalizeCSS={false}>
      <ThemeProviderCustom>
        <RouterProvider router={router} />
      </ThemeProviderCustom>
    </MantineProvider>
  </React.StrictMode>
);