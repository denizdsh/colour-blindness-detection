"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import api from "@services/api";
import type { BaseTest, BaseTestQuestion } from "@/types/test";

export const TestContext = createContext({} as ITestContextReturn<BaseTest>);

export function useTest<Test extends BaseTest>(): ITestContextReturn<Test> {
  // returns ITestContextReturn<BaseTest>
  return useContext(TestContext) as any as ITestContextReturn<Test>;
}

interface ITestProviderProps<Test> extends PropsWithChildren {
  test: Test;
  testPutEndpoint: string;
  onEndRedirect: string;
}

interface ITestContextReturn<Test> {
  test: Test;
  questionIdx: number;
  next: Function;
  skip: Function;
  isLoading: boolean;
}

export default function TestProvider<Test extends BaseTest>(
  props: ITestProviderProps<Test>
) {
  const router = useRouter();

  const { mutateAsync, isLoading: isMutationLoading } = useMutation(
    async (body: { questions: typeof props.test.questions }) =>
      await api.put<
        { questions: typeof props.test.questions },
        { url: string }
      >(`${props.testPutEndpoint}/${props.test.testId}`, body)
  );

  const [questionIdx, setQuestionIdx] = useState(0);

  const isTestEnd = questionIdx === props.test.questions.length - 1;

  const isTestCompleted = props.test.questions.every(
    (q) => q.userGuess !== null && typeof q.userGuess !== "undefined"
  );

  const isLoading = isMutationLoading || isTestCompleted;

  const next = async (userGuess: string | -1) => {
    if (isLoading) {
      return;
    }

    props.test.questions[questionIdx].userGuess = userGuess;

    if (isTestEnd) {
      return await end();
    }

    setQuestionIdx((qi) => qi + 1);
  };

  const skip = async () => {
    await next(-1);
  };

  const end = async () => {
    const res = await mutateAsync({ questions: props.test.questions });
    router.replace(props.onEndRedirect + "/" + res.url);
  };

  return (
    <TestContext.Provider
      value={{
        test: props.test,
        questionIdx,
        next,
        skip,
        isLoading,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
}
