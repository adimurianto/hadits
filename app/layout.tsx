"use client";

import "./globals.css";
import { darkTheme } from "./theme/themes";

import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
} 