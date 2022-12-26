"use client";

import "./globals.css";
import { darkTheme } from "./theme/themes";

import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head />
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <body>
            {children}
          </body>
        </ThemeProvider>
      </Provider>
    </html>
  )
} 