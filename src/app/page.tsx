import HomeCarouselText from "@components/HomeCarouselText";
import ImageCarousel from "@components/ImageCarousel";
import ImageCarouselWithContext from "@components/ImageCarousel/ImageCarouselWithContext";
import ImageCarouselProvider from "@contexts/ImageCarouselContext";

import carouselImage1 from "@images/carousel-1.png";
import carouselImage2 from "@images/carousel-2.png";
import carouselImage3 from "@images/carousel-3.png";
import carouselImage4 from "@images/carousel-4.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBD | Home",
};

export default function Home() {
  return (
    <article>
      <section className="flex h-full rounded-theme-xl bg-md-light-surface-variant/50 dark:bg-md-dark-surface-variant/50">
        <ImageCarouselProvider
          imageHeight={420}
          autoplaySec={8}
          images={[
            { src: carouselImage1, alt: "Image 1" },
            { src: carouselImage2, alt: "Image 2" },
            { src: carouselImage3, alt: "Image 3" },
            { src: carouselImage4, alt: "Image 4" },
          ]}
        >
          <article className="flex flex-1 flex-col gap-4 p-10">
            <h1 className="display-medium text-md-light-primary dark:text-md-dark-primary">
              Welcome to CBD
            </h1>

            <HomeCarouselText />
          </article>

          <ImageCarouselWithContext />
        </ImageCarouselProvider>
      </section>

      <section>
        <article>
          <section>
            <h2>Helpful Information</h2>
          </section>
          <section>Accordion</section>
        </article>
        <article>
          <section>
            <h2>FAQ</h2>
          </section>
          <section>Accordion</section>
        </article>
      </section>
    </article>
  );
}
