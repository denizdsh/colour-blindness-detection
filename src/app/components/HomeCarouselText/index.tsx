"use client";

import { useImageCarousel } from "@contexts/ImageCarouselContext";
import HomeCarouselIntro from "./HomeCarouselIntro";
import HomeCarouselIshihara from "./HomeCarouselIshihara";

export default function HomeCarouselText() {
  const { page } = useImageCarousel();

  switch (page) {
    case 0:
      return <HomeCarouselIntro />;
    case 1:
      return <HomeCarouselIshihara />;
    default:
      return <HomeCarouselIntro />;
  }
}
