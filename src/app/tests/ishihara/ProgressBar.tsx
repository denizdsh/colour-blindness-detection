"use client";

import { useTest } from "@contexts/TestContext";

export default function IshiharaProgressBar() {
  const { questionIdx, test } = useTest();

  return (
    <div className="group relative w-full rounded-theme-default py-2">
      <div
        className="absolute left-0 top-0 h-full rounded-theme-default bg-gradient-to-r from-md-light-tertiary-container/10 to-md-light-tertiary-container transition-all dark:from-md-dark-tertiary-container/10 dark:to-md-dark-tertiary-container"
        style={{
          width: ((questionIdx + 1) / test.questions.length) * 100 + "%",
        }}
      />
      <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-medium text-md-light-on-tertiary-container opacity-0 transition-opacity group-hover:opacity-100 dark:text-md-dark-on-tertiary-container">
        {questionIdx + 1}/{test.questions.length}
      </p>
    </div>
  );
}
