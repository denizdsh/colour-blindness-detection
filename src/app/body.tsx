"use client";

import Header from "@components/Header";
import { useTheme } from "@contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export default function LayoutBody(props: PropsWithChildren) {
  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <body className={theme.dark ? "dark" : "light"}>
        <Header />
        <main className="m-auto max-w-screen-xl pb-12 pt-8 max-2xl:px-8 max-xl:max-w-[100%]">
          {props.children}
        </main>
      </body>
    </QueryClientProvider>
  );
}
