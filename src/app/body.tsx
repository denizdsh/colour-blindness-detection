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
        {process.env.NODE_ENV === "production" && (
          <h1 className="display-large m-5 rounded-theme-sm bg-md-light-tertiary p-2 text-center text-md-light-on-tertiary dark:bg-md-dark-tertiary dark:text-md-dark-on-tertiary">
            Server is not public yet. <br /> REST API request like starting a
            test WILL cause an error.
          </h1>
        )}
        <main className="m-auto max-w-screen-xl pb-12 pt-8 max-2xl:px-8 max-xl:max-w-[100%]">
          {props.children}
        </main>
      </body>
    </QueryClientProvider>
  );
}
