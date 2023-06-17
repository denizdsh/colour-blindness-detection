"use client";

import "./globals.css";

import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PropsWithChildren } from "react";

const roboto = Roboto({
  weight: ["300", "400", "500"],
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
      <Body>{children}</Body>
    </html>
  );
}

function Body(props: PropsWithChildren) {
  return <body>{props.children}</body>;
}
