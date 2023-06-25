import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

import api from "@services/api";
import { IshiharaTestQuestion } from "@/types/test/ishihara";
import Button from "@components/Button";
import CopyToClipboardButton from "@components/CopyToClipboardButton";
import IIshiharaResult from "@interfaces/IIshiharaResult";
import IPropsWithIDParams from "@interfaces/IPropsWithIDParams";

export async function generateMetadata(
  props: IPropsWithIDParams
): Promise<Metadata> {
  return {
    title: `Test Report #${props.params.id} | CBD`,
  };
}

export default async function IshiharaResultReport(props: IPropsWithIDParams) {
  const questions = (
    await api.get<IIshiharaResult>("/results/" + props.params.id)
  ).questions;

  return (
    <article className="relative flex flex-col items-stretch gap-10">
      <section className="absolute left-0 top-0 flex w-full items-stretch justify-between">
        <Link href={"/result/ishihara/" + props.params.id}>
          <Button
            IconLeft={
              <ArrowUturnLeftIcon
                className="title-large text-md-light-primary dark:text-md-dark-primary"
                height={28}
              />
            }
          >
            Back To Result
          </Button>
        </Link>
        <CopyToClipboardButton iconSize={28} />
      </section>

      <h1 className="display-large text-center text-md-light-primary dark:text-md-dark-primary">
        Test Report
      </h1>

      <section className="flex flex-wrap justify-evenly gap-6">
        {questions.map((q, idx) => (
          <QuestionCard key={"question-" + idx} question={q} />
        ))}
      </section>
    </article>
  );
}

function QuestionCard(props: { question: IshiharaTestQuestion }) {
  return (
    <section className="flex flex-col items-center gap-1 rounded-theme-lg bg-md-light-surface-tint/10 p-4 dark:bg-md-dark-surface-tint/10">
      <Image
        width={180}
        height={180}
        src={props.question.imageUrl}
        alt={"Ishihara Plate #" + props.question.actualNumber}
      />
      <p>Correct Answer: {props.question.actualNumber}</p>
      <p
        className={
          props.question.userGuess === props.question.actualNumber
            ? "text-green-600"
            : "text-md-light-error dark:text-md-dark-error"
        }
      >
        Your Answer: {props.question.userGuess}
      </p>
    </section>
  );
}
