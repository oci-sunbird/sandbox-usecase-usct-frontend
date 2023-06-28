import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { colors } from "./chakra-overrides/colors";
import { Heading } from "./chakra-overrides/Heading";
import { Progress } from "./chakra-overrides/Progress";
import { Text } from "./chakra-overrides/Text";
import "./index.css";
import { router } from "./routes/router";
import Tabs from "./chakra-overrides/Tabs";

const theme = extendTheme({
  styles: {},
  colors,
  components: {
    Heading: Heading,
    Text: Text,
    Progress: Progress,
    Tabs: Tabs,
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
