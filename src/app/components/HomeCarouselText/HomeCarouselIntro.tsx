import Button from "@components/Button";
import Link from "next/link";

export default function HomeCarouselIntro() {
  return (
    <article className="flex flex-1 flex-col items-stretch justify-between gap-3">
      <p className="body-large text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
        At Colour Blindness Detection we do... Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Duis at consectetur lorem donec massa sapien.
        Odio tem dictum. In nibh mauris cursus mattis molestie.
      </p>
      <Link href="/tests">
        <Button className="w-full">
          <p className="m-auto">See Colour Tests</p>
        </Button>
      </Link>
    </article>
  );
}
