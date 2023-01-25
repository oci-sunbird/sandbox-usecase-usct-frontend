import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/router";

const theme = extendTheme({
  colors: {
    main: {
      0: "#ffffff",
      50: "#f5f5f5",
      100: "#e6e6e6",
      300: "#c8c8c8",
      500: "#a0a0a0",
      700: "#646464",
      900: "#000000"
    },
  },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
