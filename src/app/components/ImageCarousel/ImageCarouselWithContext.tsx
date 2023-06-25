"use client";

import Image from "next/image";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { useImageCarousel } from "@contexts/ImageCarouselContext";
import Button from "@components/Button";
import twMerge from "@/twMerge";

export default function ImageCarouselWithContext() {
  const {
    images,
    imageHeight,
    imageWidth,
    imagesCount,
    page,
    changeImageHandler,
  } = useImageCarousel();

  return (
    <article className="flex flex-[2] items-center gap-7 rounded-theme-xl bg-md-light-surface-variant/50 px-4 py-4 dark:bg-md-dark-surface-variant/50">
      <button
        title="Previous image"
        className="group h-full"
        onClick={changeImageHandler((p) => p - 1)}
      >
        <ChevronLeftIcon
          height={40}
          className={
            "fill-md-light-on-surface-variant/50 group-hover:fill-md-light-on-surface-variant group-active:fill-md-light-on-surface-variant dark:fill-md-dark-on-surface-variant/50 dark:group-hover:fill-md-dark-on-surface-variant group-active:dark:fill-md-dark-on-surface-variant"
          }
        />
      </button>

      <section className="relative flex-1 overflow-clip">
        <div
          className="flex min-w-full items-center transition-all duration-300"
          style={{
            transform: `translateX(-${(page / imagesCount) * 100}%)`,
            width: `${imagesCount * 100}%`,
          }}
        >
          {images.map((i) => (
            <div key={i.alt} className="h-full max-h-full w-full max-w-full">
              <Image
                src={i.src}
                alt={i.alt}
                height={i.height || imageHeight}
                width={i.width || imageWidth}
                className="m-auto select-none rounded-sm"
              />
            </div>
          ))}
        </div>
        <article className="absolute bottom-1 left-[50%] flex translate-x-[-50%] gap-3">
          {Array(imagesCount)
            .fill(0)
            .map((_, idx) => (
              <Button
                colour="primary"
                key={"carousel-image-" + idx}
                title={images[idx].alt}
                onClick={changeImageHandler(idx)}
                className={twMerge(
                  "h-3 w-3 rounded-theme-circle px-0 py-0",
                  idx === page && "bg-md-light-primary dark:bg-md-dark-primary"
                )}
              />
            ))}
        </article>
      </section>

      <button
        title="Next image"
        className="group h-full"
        onClick={changeImageHandler((p) => p + 1)}
      >
        <ChevronRightIcon
          height={40}
          className={
            "fill-md-light-on-surface-variant/50 group-hover:fill-md-light-on-surface-variant group-active:fill-md-light-on-surface-variant dark:fill-md-dark-on-surface-variant/50 dark:group-hover:fill-md-dark-on-surface-variant group-active:dark:fill-md-dark-on-surface-variant"
          }
        />
      </button>
    </article>
  );
}
