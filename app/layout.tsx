'use client'
import { ReactNode } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from '@/components/Navbar';

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
          <Navbar/>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};
