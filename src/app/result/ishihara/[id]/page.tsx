import { Metadata } from "next";

import api from "@services/api";

import Accordion from "@components/Accordion";
import Button from "@components/Button";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import IIshiharaResult from "@interfaces/IIshiharaResult";
import IPropsWithIDParams from "@interfaces/IPropsWithIDParams";
import Link from "next/link";
import CopyToClipboardButton from "@components/CopyToClipboardButton";

import rangeReg from "@images/result/colour-range/regular.png";
import rangeDeu from "@images/result/colour-range/deuteranopia.png";
import rangePro from "@images/result/colour-range/protanopia.png";
import rangeTri from "@images/result/colour-range/tritanopia.png";

import parrotsReg from "@images/result/parrots/regular.jpg";
import parrotsDeu from "@images/result/parrots/deuteranopia.jpg";
import parrotsPro from "@images/result/parrots/protanopia.jpg";
import parrotsTri from "@images/result/parrots/tritanopia.jpg";
import twMerge from "@/twMerge";

export async function generateMetadata(
  props: IPropsWithIDParams
): Promise<Metadata> {
  return {
    title: `Test Result #${props.params.id} | CBD`,
  };
}

const colourBlindnessStages = {
  0.9: {
    text: "Regular Vision",
    className: "text-md-light-primary dark:text-md-dark-primary",
  },
  0.7: {
    text: "Deficient Vision",
    className: "text-md-light-tertiary dark:text-md-dark-tertiary",
  },
  0.5: {
    text: "Strong Colour Blidness",
    className: "text-md-light-error",
  },
};

export default async function Result(props: IPropsWithIDParams) {
  const test = await api.get<IIshiharaResult>("/results/" + props.params.id);

  const getCBStage = (accuracy: number) =>
    Object.entries(colourBlindnessStages).find(
      ([acc, _]) => accuracy >= Number(acc)
    )?.[1] || Object.values(colourBlindnessStages).at(-1)!;

  const overallCBStage = getCBStage(test.accuracy);

  return (
    <article className="relative flex flex-col items-stretch gap-10">
      {/* Absolute buttons */}

      <section className="absolute left-0 top-0 flex w-full items-stretch justify-between">
        <Link href={"/result/ishihara/report/" + test.testUrl}>
          <Button
            IconLeft={
              <ClipboardDocumentListIcon
                className="title-large text-md-light-primary dark:text-md-dark-primary"
                height={28}
              />
            }
          >
            View Report
          </Button>
        </Link>
        <CopyToClipboardButton iconSize={28} />
      </section>

      {/* Title */}

      <h1 className="display-large text-center text-md-light-primary dark:text-md-dark-primary">
        Test Result
      </h1>

      <section className="flex flex-col items-center gap-2">
        <h2 className="display-small">
          You Possibly Have{" "}
          <span className={twMerge("font-medium", overallCBStage.className)}>
            {overallCBStage.text}
          </span>
        </h2>
        <p className="title-large text-center">
          Protanopia, deuteranopia, protanomaly, and deuteranomaly are commonly
          inherited forms of red–green color blindness which affect a
          substantial portion of the human population. Those affected have
          difficulty with discriminating red and green hues due to the absence
          or mutation of the red or green retinal photoreceptors.
        </p>
      </section>

      {/* Score */}

      <section className="headline-large grid grid-cols-4 rounded-theme-lg bg-md-light-surface-variant/50 px-12 py-5 text-md-light-on-surface-variant dark:bg-md-dark-surface-variant/50 dark:text-md-dark-on-surface-variant">
        <article className="flex flex-col items-center gap-5">
          <h3>Accuracy</h3>
          <p className={overallCBStage.className}>
            {(test.accuracy * 100).toFixed(0)}%
          </p>
        </article>
        <article className="flex flex-col items-center gap-5 border-x-[1px] border-md-light-outline dark:border-md-dark-outline">
          <h3>Total</h3>
          <p className={overallCBStage.className}>{test.totalQuestions}</p>
        </article>
        <article className="flex flex-col items-center gap-5 border-r-[1px] border-md-light-outline dark:border-md-dark-outline">
          <h3>Correct</h3>
          <p className={overallCBStage.className}>{test.correctQuestions}</p>
        </article>
        <article className="flex flex-col items-center gap-5">
          <h3>Wrong</h3>
          <p className={overallCBStage.className}>{test.wrongQuestions}</p>
        </article>
      </section>

      {/* Colour Ranges */}

      <section className="headline-small grid grid-cols-4 rounded-theme-lg bg-md-light-surface-variant/50 px-12 py-5 text-md-light-on-surface-variant dark:bg-md-dark-surface-variant/50 dark:text-md-dark-on-surface-variant">
        <article className="flex h-full flex-col items-center gap-1">
          <Image
            src={rangeReg}
            alt="Colour range of a person with Regular vision"
          />
          <h4>Regular vision</h4>
          <p className={overallCBStage.className}>
            {(test.accuracy * 100).toFixed(0)}%
          </p>
        </article>
        <article className="flex h-full flex-col items-center gap-1">
          <Image
            src={rangeDeu}
            alt="Colour range of a person with Deuteranopia"
          />
          <h4>Deuteranopia</h4>
          <p
            className={
              getCBStage(test.blindnessTypeAccuracy.DEUTERANOPIA).className
            }
          >
            {(test.blindnessTypeAccuracy.DEUTERANOPIA * 100).toFixed(0)}%
          </p>
        </article>
        <article className="flex h-full flex-col items-center gap-1">
          <Image
            src={rangePro}
            alt="Colour range of a person with Protanopia"
          />
          <h4>Protanopia</h4>
          <p
            className={
              getCBStage(test.blindnessTypeAccuracy.PROTANOPIA).className
            }
          >
            {(test.blindnessTypeAccuracy.PROTANOPIA * 100).toFixed(0)}%
          </p>
        </article>
        <article className="flex h-full flex-col items-center gap-1">
          <Image
            src={rangeTri}
            alt="Colour range of a person with Tritanopia"
          />
          <h4>Tritanopia</h4>
          <p
            className={
              getCBStage(test.blindnessTypeAccuracy.TRITANOPIA).className
            }
          >
            {(test.blindnessTypeAccuracy.TRITANOPIA * 100).toFixed(0)}%
          </p>
        </article>
      </section>

      {/* Accordions */}

      <Accordion title="Regular Vision" disabled defaultOpen>
        <article className="flex gap-5">
          <Image src={parrotsReg} alt="Parrots seen with Regular vision" />
          <p>
            Regular vision, also known as trichromacy, is the standard visual
            ability possessed by the majority of the population. Individuals
            with regular vision have three types of functioning cone cells in
            their eyes, each specialized in detecting different wavelengths of
            light: short-wavelength (S-cones), medium-wavelength (M-cones), and
            long-wavelength (L-cones). This trichromatic vision allows for a
            wide range of color perception and discrimination, enabling the
            ability to differentiate between various hues, including red, green,
            blue, and their combinations. With regular vision, individuals can
            experience the full spectrum of colors and appreciate the richness
            and diversity of the visual world around them.
          </p>
        </article>
      </Accordion>
      <Accordion title="Deuteranopia" disabled defaultOpen>
        <article className="flex gap-5">
          <Image src={parrotsDeu} alt="Parrots seen with Deuteranopia" />
          <p>
            Deuteranopia is a form of red-green color blindness that affects
            approximately 6% of males. It is characterized by the absence or
            abnormality of M-opsins, which are responsible for detecting
            medium-wavelength light in the cone cells of the eyes. Individuals
            with deuteranopia have a neutral point at a slightly longer
            wavelength of 498 nm, resulting in a more greenish hue of cyan. Like
            protanopia, deuteranopia causes difficulties in discriminating
            between certain hues, but unlike protanopia, it does not lead to a
            dimming of long wavelengths. Those with deuteranopic unilateral
            dichromacy often perceive wavelengths shorter than the neutral point
            as blue and those longer than it as yellow when using only their
            deuteranopic eye.
          </p>{" "}
        </article>
      </Accordion>
      <Accordion title="Protanopia" disabled defaultOpen>
        <article className="flex gap-5">
          <Image src={parrotsPro} alt="Parrots seen with Protanopia" />
          <p>
            Protanopia, on the other hand, is another type of red-green color
            blindness that affects a significant number of individuals,
            primarily males. It is characterized by the absence or dysfunction
            of L-opsins, which detect long-wavelength light in the cone cells.
            As a result, individuals with protanopia have difficulty
            distinguishing between certain shades of red and green. They often
            perceive red as darker or brownish and may have a reduced
            sensitivity to longer wavelengths. The neutral point for protanopes
            is typically around 492 nm, causing some overlap in the perceived
            colors of red and green.
          </p>
        </article>
      </Accordion>
      <Accordion title="Tritanopia" disabled defaultOpen>
        <article className="flex gap-5">
          <Image src={parrotsTri} alt="Parrots seen with Tritanopia" />
          <p>
            Tritanopia, or blue-yellow color blindness, is a relatively rare
            form of color vision deficiency that affects a small percentage of
            the population. It is caused by the absence or malfunctioning of
            S-opsins, which detect short-wavelength light in the cone cells.
            Individuals with tritanopia have difficulty perceiving and
            distinguishing between certain shades of blue and yellow. They may
            also struggle with differentiating between blues and greens. The
            neutral point for tritanopes is around 570 nm, resulting in a shift
            towards perceiving neutral colors as a pinkish hue. This condition
            is typically congenital and equally affects both males and females.
          </p>
        </article>
      </Accordion>
    </article>
  );
}
