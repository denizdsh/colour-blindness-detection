"use client";

import Header from "@components/Header";
import { useTheme } from "@contexts/ThemeContext";
import { PropsWithChildren } from "react";

export default function LayoutBody(props: PropsWithChildren) {
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
