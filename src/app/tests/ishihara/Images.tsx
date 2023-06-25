"use client";

import { IshiharaTest } from "@/types/test/ishihara";
import { useTest } from "@contexts/TestContext";
import Image from "next/image";

export default function Images() {
  const { test, questionIdx } = useTest<IshiharaTest>();

  const images = test.questions.map((q) => q.imageUrl);

  const getImageProps = (idx: number): { priority: boolean } => {
    return { priority: idx < 5 };
  };

  return (
    <section className="relative flex-1 overflow-hidden">
      <div
        className="flex w-full flex-1 items-center transition-all duration-300"
        style={{
          transform: `translateX(-${(questionIdx / images.length) * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((i, idx) => (
          <div
            key={"ishihara-plate-" + idx}
            className="relative aspect-square max-h-full w-full max-w-full"
          >
            <Image
              fill
              src={i}
              alt="Ishihara Test"
              {...getImageProps(idx)}
              className=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}
