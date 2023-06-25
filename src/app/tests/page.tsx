import { Metadata } from "next";

import TestCard from "./TestCard";

import ishiharaImg from "@images/tests/ishihara.png";

export const metadata: Metadata = {
  title: "Colour Tests | CBD",
};

export default function Tests() {
  return (
    <>
      <article className="flex flex-col gap-10">
        <TestCard
          link="/tests/ishihara"
          imageSrc={ishiharaImg}
          title="Ishihara Test"
        >
          The Ishihara test is a color vision test for detection of red-green
          color deficinecies. It was named after its designer, Shinobu Ishihara,
          a professor at the University of Tokyo, who first published his tests
          in 1917. The test consists of a number of Ishihara plates, which are a
          type of seudoisochromatic plate. Each plate depicts a solid circle of
          colored dots appearing randomized in color and size.Within the pattern
          are dots which form a number or shape clearly visible to those with
          normal color vision, and invisible, or difficult to see, to those with
          a red-green color vision defect. Other plates are intentionally
          designed to reveal numbers only to those with a red-green color vision
          deficiency, and be invisible to those with normal red-green color
          vision.
          <br />
          <br />* Please try to respond within 3 seconds of seeing the image for
          optimal results.
        </TestCard>
      </article>
    </>
  );
}
