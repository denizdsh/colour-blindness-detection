import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Heading from "@components/Heading";
import HomeCarouselText from "@components/HomeCarouselText";
import ImageCarouselWithContext from "@components/ImageCarousel/ImageCarouselWithContext";
import ImageCarouselProvider from "@contexts/ImageCarouselContext";
import Accordion from "@components/Accordion";

import carouselImg1 from "@images/home/carousel/1.png";
import carouselImg2 from "@images/home/carousel/2.png";
import carouselImg3 from "@images/home/carousel/3.png";
import carouselImg4 from "@images/home/carousel/4.png";
import rainbowImg from "@images/home/rainbow.png";
import ishiharaImg from "@images/home/ishihara.png";
import glassesImg from "@images/home/glasses.png";

export const metadata: Metadata = {
  title: "CBD | Home",
};

export default function Home() {
  return (
    <article className="flex flex-col items-center gap-12">
      <section className="flex h-full rounded-theme-xl bg-md-light-surface-variant/50 dark:bg-md-dark-surface-variant/50">
        <ImageCarouselProvider
          imageHeight={420}
          autoplaySec={8}
          images={[
            { src: carouselImg1, alt: "Image 1" },
            { src: carouselImg2, alt: "Image 2" },
            { src: carouselImg3, alt: "Image 3" },
            { src: carouselImg4, alt: "Image 4" },
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

      <section className="flex flex-col items-center gap-8">
        <Heading>Helpful Information</Heading>

        <Accordion
          defaultOpen
          title="What is colour blindness?"
          className="flex items-center gap-5"
        >
          <Image src={rainbowImg} alt="Rainbow" className="flex-1" />
          <article className="flex-[4]">
            <p>
              It is{" "}
              <Link
                className="underline"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Visual_impairment"
              >
                a condition
              </Link>{" "}
              in which the ability to distinguish specific range of colors is
              average. A person suffering from color blindness has trouble
              seeing red, green, blue, or a combination.
              <br />
              <br />
              A person&apos;s ability to see some combination of colors is
              rarely lost (monochromacy). Many people believe that only black
              and white colors are caught in a person suffering from Full
              (monochromacy) type. It has many different types and levels.
              <br />
              <br />
              According to one of most popular survey, They will found 8% in men
              and only 0.5% in women.
            </p>
          </article>
        </Accordion>

        <Accordion defaultOpen title="Types of Color Blindness & Their Levels">
          <ol className="list-none">
            <li>
              <h3 className="title-large text-md-light-tertiary dark:text-md-dark-tertiary">
                Red-Green Type
              </h3>
              <p>
                It is mostly seen in familial causes is damage or reduced red
                con or green con pigment function. There are four sub type of
                Red-Green Type:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <span className="font-medium">Protanomaly</span> - due to the
                  unusual occurrence of red cone pigments. In this type, red,
                  orange, and yellow appear green, and the colors are not
                  bright. This condition is benign and usually does not affect
                  daily life.
                </li>
                <li>
                  <span className="font-medium">Protanopia</span> - In this
                  type, the red cone pigments stop working, and the red will
                  appears as black. Some variants of orange, yellow and green
                  all appear as yellow.
                </li>
                <li>
                  Some opticians prefer to use a reverse color blind test to
                  diagnose colour vision deficiency. In this test, the patients
                  are asked to identify the coloured object in the pallet within
                  dynamic colored background.
                </li>
                <li>
                  <span className="font-medium">Deuteranomaly</span> - This is
                  the most common type of found in peoples. It has an unusual
                  green cone pigment. Yellow and green appear as red, purple and
                  blue are difficult to identify. This condition is benign and
                  usually does not affect daily life.
                </li>
                <li>
                  <span className="font-medium">Deuteranopia</span> - In this,
                  green cone pigments stop working. They see red colors as
                  brownish-yellow and green as dark yellow.
                </li>
              </ul>
            </li>

            <br />

            <li>
              <h3 className="title-large text-md-light-tertiary dark:text-md-dark-tertiary">
                Blue-Yellow Type
              </h3>
              <p>
                Blue-yellow type is rarer than red-green. In this, the blue cone
                pigment (triton) is either absent or has a limited function.
                There are two types of blue-yellow type:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <span className="font-medium">Tritanomaly</span> - Blue cone
                  pigments have less function. The blue color appears as green,
                  and it cannot be easy to differentiate from pink to yellow and
                  red.
                </li>
                <li>
                  <span className="font-medium">Tritanopia</span> - People with
                  Tritanopia lack blue cone cells. Blue appears green in this,
                  and the yellow color looks like purple or light brown.
                </li>
              </ul>
            </li>

            <br />

            <li>
              <h3 className="title-large text-md-light-tertiary dark:text-md-dark-tertiary">
                Full (Monochromacy) Type
              </h3>
              <p>
                People with full type (monochromacy) do not see any colors, and
                their clarity of vision can also be affected. There are two
                types of monochromacy:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <span className="font-medium">Cone Monochromacy</span> - In
                  this, two or three cone cell pigments do not work. People with
                  cone monochromacy have difficulty distinguishing between
                  colors because the brain needs signals from different types of
                  cones to see. This comparison is not possible when only one
                  type of cone works.
                </li>
                <li>
                  <span className="font-medium">Rod Monochromacy</span> - It is
                  present from birth. It does not contain any of the available
                  pigments of cone cells. People with rod monochromacy see the
                  world in black, white, and gray. People with rod monochromacy
                  are photophobic and very uncomfortable in bright environments.
                </li>
              </ul>
            </li>
          </ol>
        </Accordion>

        <Accordion
          title="How to Test Colour Blindness?"
          className="flex items-center gap-5"
        >
          <Image
            src={ishiharaImg}
            alt="Ishihara test image"
            className="flex-1"
          />
          <article className="flex-[4]">
            <p>
              There are many tests available to check color vision deficiency,
              But Ishihara test is a standard method. This will test red-green
              type. It is most likely used for regular color vision in
              government jobs, schools or medicals.
              <br />
              <br />
              The Ishihara test includes 38 circular plates having printed
              digits on which are created by unique random dots in more than one
              color. The plate will be shown in the test to the person and asked
              which number will be seen.
              <br />
              <br />
              If a person makes some mistakes during the test, they are
              diagnosed with color blindness.
            </p>
          </article>
        </Accordion>

        <Accordion
          title="Lenses, Glasses and Color Filters"
          className="flex items-center gap-5"
        >
          <Image
            src={glassesImg}
            alt="Ishihara test image"
            className="flex-[2] rounded-sm"
          />
          <article className="flex-[3]">
            <p>
              Opticians supply colored specks lenses or single red-tinted
              contact lenses to improve vision related to some colors.
              <br />
              <br />
              The studies show that issues in a cone cause wavelengths to
              overlap more, consequently leading to poor color vision.
              <br />
              <br />
              The glasses have tinted lenses that help and give the ability to
              the person to see more colors accurately.
              <br />
              <br />
              The glasses use a filter to cut the overlapping wavelengths,
              allowing the user to give more precise recognition between colors.
              <br />
              <br />
              Glasses have many more useful daily life applications, like
              selecting clothes with perfect patterns of colors. It also helps a
              person to grow in their color-related profession, such as graphic
              designing and working profiles that require handling various
              electrical wiring having lots of colors depend on correct color
              perception.
            </p>
          </article>
        </Accordion>

        <Heading>Frequently Asked Questions</Heading>

        <Accordion title="1. How Do I Check If I Am Color Blind?">
          <p>
            Try our free online test for an initial check. It can be done at
            home by online medium from your pc, laptop, or mobile devices. We
            have various tests to determine whether you are color blind. Before
            starting this test, you need to read all instructions, look
            carefully at a series of Ishihara plates, and then answer some
            simple questions about what you see in those images. After ending
            the test, the results will show you whether or not you have color
            blindness, which is the inability to see color differences in a
            specific range. Suppose it shows that you failed the test and have
            symptoms of it. In that case, it is necessary to consult your nearby
            doctor or optometrist to find out what specific conditions may be
            causing this condition and discuss Treatment options. Ultimately,
            taking care of your eyes by identifying any vision problems early
            can help ensure optimal functioning.
          </p>
        </Accordion>
        <Accordion title="2. What Are The Various Types?">
          <p>
            There are four main types: Red-Green, Blue-Yellow, and Full
            (Monochromacy). Each color vision deficiency results from specific
            eye defects or abnormalities that affect how an individual sees
            color. For example, individuals with the Red-Green type are less
            sensitive to color variations in the spectrum&apos;s red and green
            regions. Individuals with the Blue-Yellow type may not distinguish
            between hues such as cyan or blue-yellow. And people with Full
            (Monochromacy) Type have difficulty seeing any color.
          </p>
        </Accordion>
        <Accordion title="3. Can Colorblind People Drive?">
          <p>
            Driving is a most difficult skill, allowing people to navigate the
            roads safely and access work, school, and other destinations.
            However, not everyone has this ability. Some people suffer from
            color blindness, making it difficult to differentiate some colors
            and combinations. Many have wondered whether color-blind drivers are
            safe to drive on the road, but this question depends on their
            particular type of color blindness. For instance, color blindness
            can be detected with a simple online test. Regardless of the cause,
            all color blind drivers can benefit from taking extra care behind
            the wheel and being especially careful by consulting to doctor and
            taking Treatment like glasses or lenses while driving.
          </p>
        </Accordion>
        <Accordion title="4. How Rare Is Full (Monochromacy) Type?">
          <p>
            It is estimated that it affects roughly 10% of the population, with
            different severity levels. Most color-blind individuals are
            considered to have what is known as partial color blindness, meaning
            they experience some difficulty distinguishing colors but remain
            able to see color in most situations. However, some people possess
            complete color vision deficiency, meaning they cannot see colors at
            all and see the world only in shades of grey.
          </p>
        </Accordion>
        <Accordion title="5. What Causes Color Blindness?">
          <p>
            There are several different types, but the most common type is
            caused by an altered or absent color of Photopsin pigment in the
            eyes. It will also be caused by other conditions that affect the
            eyes, such as cataracts or macular degeneration. Most of all, it is
            hereditary but can also be acquired through illness or injury.
            <br />
            <br />
            It is relatively common, affecting up to 8% of men and 0.5% of women
            worldwide. While it is not a severe condition, it can impact a
            person&apos;s ability to participate in certain activities, such as
            driving or identifying colors in a work environment. There are
            several ways to adapt to color-blindness, including color filters
            and special glasses by consulting a doctor.
          </p>
        </Accordion>
      </section>
    </article>
  );
}
