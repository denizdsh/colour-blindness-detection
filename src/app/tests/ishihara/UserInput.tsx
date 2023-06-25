"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@components/Button";
import Input from "@components/Input";
import { useTest } from "@contexts/TestContext";
import type { IshiharaTest } from "@/types/test/ishihara";

export default function UserInput() {
  const [input, setInput] = useState<string>("");

  const { next, skip, isLoading } = useTest<IshiharaTest>();

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "";

    setInput(filterToNumber(value));
  };

  const addValueHandler = (value: string | number) => {
    setInput((i) => i + value.toString());
  };

  const isInputValid = (() => {
    const currentInput = input.trim();

    return currentInput.length > 0 && !isNaN(Number(currentInput));
  })();

  const nextSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isInputValid) {
      next(filterToNumber(input));
      resetInput();
    }
  };

  const skipHandler = () => {
    resetInput();
    skip();
  };

  const resetInput = () => {
    setInput("");
  };

  if (isLoading) {
    return (
      <article className="flex-1">
        <h1>Loading...</h1>
      </article>
    );
  }

  return (
    <form onSubmit={nextSubmitHandler} className="flex flex-1 flex-col gap-7">
      <section className="flex flex-col items-center gap-2">
        <label htmlFor="user-guess" className="headline-large">
          What number can you see?
        </label>
        <article className="relative h-fit w-full">
          <Input
            id="user-guess"
            value={input}
            onChange={changeValueHandler}
            className="headline-small w-full rounded-theme-md text-center"
          />
          {isInputValid && (
            <Button
              onClick={resetInput}
              type="reset"
              className="absolute right-2 top-[50%] translate-y-[-50%] rounded-theme-circle bg-transparent px-3 py-3 dark:bg-transparent"
            >
              <XMarkIcon height={24} />
            </Button>
          )}
        </article>
      </section>
      <section className="grid grid-cols-3 grid-rows-4 gap-7">
        <Button
          type="button"
          onClick={() => addValueHandler(1)}
          className="display-medium select-none"
        >
          <p className="m-auto">1</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(2)}
          className="display-medium select-none"
        >
          <p className="m-auto">2</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(3)}
          className="display-medium select-none"
        >
          <p className="m-auto">3</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(4)}
          className="display-medium select-none"
        >
          <p className="m-auto">4</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(5)}
          className="display-medium select-none"
        >
          <p className="m-auto">5</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(6)}
          className="display-medium select-none"
        >
          <p className="m-auto">6</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(7)}
          className="display-medium select-none"
        >
          <p className="m-auto">7</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(8)}
          className="display-medium select-none"
        >
          <p className="m-auto">8</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(9)}
          className="display-medium select-none"
        >
          <p className="m-auto">9</p>
        </Button>

        <Button
          colour="primary"
          type="button"
          onClick={skipHandler}
          className="display-small select-none uppercase"
        >
          <p className="m-auto">SKIP</p>
        </Button>

        <Button
          type="button"
          onClick={() => addValueHandler(0)}
          className="display-medium select-none"
        >
          <p className="m-auto">0</p>
        </Button>

        <Button
          colour="tertiary"
          type="submit"
          className={
            "display-small select-none uppercase opacity-0 transition-opacity"
          }
          style={{
            opacity: isInputValid ? 1 : 0,
            cursor: isInputValid ? "pointer" : "default",
          }}
        >
          <p className="m-auto">NEXT</p>
        </Button>
      </section>
    </form>
  );
}

function filterToNumber(value: string): string {
  return value
    .split("")
    .filter((x) =>
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(x)
    )
    .join("");
}
