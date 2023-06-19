import { PropsWithChildren } from "react";

import twMerge from "@/twMerge";
import Rainbow from "./Rainbow";

export default function Heading(
  props: {
    textClassName?: string;
    underlineClassName?: string;
    containerClassName?: string;
  } & PropsWithChildren
) {
  return (
    <article
      className={twMerge(
        "flex w-fit flex-col items-center gap-[2px]",
        props.containerClassName
      )}
    >
      <h2 className={twMerge("headline-large", props.textClassName)}>
        {props.children}
      </h2>
      <Rainbow className={twMerge("h-[1px]", props.underlineClassName)} />
    </article>
  );
}
