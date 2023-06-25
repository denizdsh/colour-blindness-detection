import { Metadata } from "next";

import api from "@services/api";
import TestProvider from "@contexts/TestContext";
import Images from "./Images";
import UserInput from "./UserInput";
import type { IshiharaTest } from "@/types/test/ishihara";
import IshiharaProgressBar from "./ProgressBar";

async function getTest(): Promise<IshiharaTest> {
  return await api.post<any, IshiharaTest>("/ishihara-tests", null);
}

export const metadata: Metadata = {
  title: "Ishihara Test | CBD",
};

export default async function Ishihara() {
  const test = await getTest();

  return (
    <TestProvider test={test} testPutEndpoint="/ishihara-tests" onEndRedirect="/result/ishihara">
      <IshiharaProgressBar />
      <article className="w-screen-lg m-auto flex h-[calc(100svh-10rem)] items-center gap-20">
        <Images />
        <UserInput />
      </article>
    </TestProvider>
  );
}
