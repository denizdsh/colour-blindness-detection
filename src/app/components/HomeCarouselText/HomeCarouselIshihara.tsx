import Button from "@components/Button";
import Link from "next/link";

export default function HomeCarouselIshihara() {
  return (
    <article className="flex flex-1 flex-col items-stretch justify-between gap-3">
      <p className="body-large text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
        The Ishihara colour blindness test... Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Duis at consectetur lorem donec massa sapien.
        Odio tempor orci dapibus ultrices in iaculis nunc sed. Tempor orci
        dapibus ultrices in iaculis. Lectus arcu bibendum at varius vel
        pharetra. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
      </p>
      <Link href="/tests/ishihara">
        <Button colour="primary" className="w-full">
          <p className="m-auto">Play Ishihara Now</p>
        </Button>
      </Link>
    </article>
  );
}
