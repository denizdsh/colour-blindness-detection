"use client";

import ImageCarouselProvider from "@contexts/ImageCarouselContext";
import { IImageCarouselProps } from "@interfaces/IImageCarousel";
import ImageCarouselWithContext from "./ImageCarouselWithContext";

export default function ImageCarousel(props: IImageCarouselProps) {
  return (
    <ImageCarouselProvider {...props}>
      <ImageCarouselWithContext />
    </ImageCarouselProvider>
  );
}
