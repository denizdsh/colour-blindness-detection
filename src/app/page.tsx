import ImageCarousel from "@components/ImageCarousel";
import ImageCarouselWithContext from "@components/ImageCarousel/ImageCarouselWithContext";
import ImageCarouselProvider from "@contexts/ImageCarouselContext";

import carouselImage1 from "@images/carousel-1.png";
import carouselImage2 from "@images/carousel-2.png";
import carouselImage3 from "@images/carousel-3.png";
import carouselImage4 from "@images/carousel-4.png";

export default function Home() {
  return (
    <article>
      <section className="flex rounded-theme-xl bg-md-light-surface-variant/50 dark:bg-md-dark-surface-variant/50">
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
          <article className="flex-1 flex-col gap-4 p-10">
            <h1 className="display-medium text-md-light-primary dark:text-md-dark-primary">
              Welcome to CBD
            </h1>
            <p className="body-large text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
              At Colour Blindness Detection we do... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis at consectetur lorem donec
              massa sapien. Odio tempor orci dapibus ultrices in iaculis nunc
              sed. Tempor orci dapibus ultrices in iaculis. Lectus arcu bibendum
              at varius vel pharetra. Molestie ac feugiat sed lectus vestibulum
              mattis ullamcorper. Tincidunt lobortis feugiat vivamus at augue
              eget arcu dictum. In nibh mauris cursus mattis molestie. Nibh cras
              pulvinar mattis nunc. Lobortis mattis aliquam faucibus purus.
              Ultrices neque ornare aenean euismod elementum nisi. Sit amet
              volutpat consequat mauris nunc congue.
            </p>
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
