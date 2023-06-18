"use client";

import Image from "next/image";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { useImageCarousel } from "@contexts/ImageCarouselContext";

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
        className="group"
        onClick={changeImageHandler((p) => p - 1)}
      >
        <ChevronLeftIcon
          height={40}
          className={
            "fill-md-light-on-surface-variant/50 group-hover:fill-md-light-on-surface-variant group-active:fill-md-light-on-surface-variant dark:fill-md-dark-on-surface-variant/50 dark:group-hover:fill-md-dark-on-surface-variant group-active:dark:fill-md-dark-on-surface-variant"
          }
        />
      </button>

      <section className="flex-1 overflow-clip">
        <div
          className="flex min-w-full items-center transition-all duration-300"
          style={{
            transform: `translateX(-${(page / imagesCount) * 100}%)`,
            width: `${imagesCount * 100}%`,
          }}
        >
          {images.map((i) => (
            <div
              key={i.src.toString()}
              className="h-full max-h-full w-full max-w-full"
            >
              <Image
                src={i.src}
                alt={i.alt}
                height={i.height || imageHeight}
                width={i.width || imageWidth}
                className="m-auto select-none rounded-theme-sm"
              />
            </div>
          ))}
        </div>
      </section>

      <button
        title="Next image"
        className="group"
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
