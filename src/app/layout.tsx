import "./globals.css";

import { Metadata } from "next";
import { Roboto } from "next/font/google";

import { ThemeProvider } from "@contexts/ThemeContext";
import LayoutBody from "./body";

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
        <LayoutBody>{children}</LayoutBody>
      </ThemeProvider>
    </html>
  );
}
