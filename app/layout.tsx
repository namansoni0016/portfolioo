'use client'
import { ReactNode } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar/>
            <Box component="main" flexGrow={1}>{children}</Box>
            <Footer/>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
};
