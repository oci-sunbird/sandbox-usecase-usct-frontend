import { ChakraProvider, extendTheme, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { Heading } from './chakra-overrides/Heading';
import { Progress } from './chakra-overrides/Progress';
import Tabs from './chakra-overrides/Tabs';
import { Text } from './chakra-overrides/Text';
import { colors } from './chakra-overrides/colors';
import './index.css';
import { router } from './routes/router';
import { List } from './chakra-overrides/List';

const theme = extendTheme({
  colors,
  components: {
    Heading: Heading,
    Text: Text,
    Progress: Progress,
    Tabs: Tabs,
    List: List,
  },
  breakpoints: {
    xs: '200px', //xs
    sm: '320px', //sm
    md_sm: '520px', //md_sm
    md: '768px',
    lg: '991px',
    xl: '1240px',
    '2xl': '1300px',
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
