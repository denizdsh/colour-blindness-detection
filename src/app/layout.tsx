"use client";

import "./globals.css";

import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PropsWithChildren } from "react";

import { ThemeProvider, useTheme } from "@contexts/ThemeContext";
import Header from "@components/Header";

export const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "CBD",
  description:
    "Colour Blindness Detection | Health & Eyecare Utility Web Application",
  viewport: {
    height: "device-height",
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <ThemeProvider>
        <Body>{children}</Body>
      </ThemeProvider>
    </html>
  );
}

function Body(props: PropsWithChildren) {
  const theme = useTheme();

  return (
    <body className={theme.dark ? "dark" : "light"}>
      <Header />
      <main className="m-auto max-w-screen-xl pb-12 pt-8 max-xl:max-w-[100%] max-xl:px-8">
        {props.children}
      </main>
    </body>
  );
}
