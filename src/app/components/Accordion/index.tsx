"use client";

import { PropsWithChildren, useState } from "react";

import twMerge from "@/twMerge";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import IPropsWithClassName from "@interfaces/IPropsWithClassName";

interface IAccordionProps extends PropsWithChildren, IPropsWithClassName {
  title: string;
  defaultOpen?: boolean;
  disabled?: boolean;
}

export default function Accordion(props: IAccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(!!props.defaultOpen);

  const toggleOpenHandler = () => {
    if (props.disabled) {
      return;
    }

    setIsOpen((o) => !o);
  };

  return (
    <article className="rounded-theme-lg bg-md-light-surface-container-highest dark:bg-md-dark-surface-container-highest">
      <section
        onClick={toggleOpenHandler}
        className={twMerge(
          "flex items-center justify-between rounded-theme-lg px-7 py-5",
          isOpen
            ? twMerge(
                "bg-md-light-surface-dim text-md-light-primary dark:bg-md-dark-surface-dim dark:text-md-dark-primary",
                !props.disabled &&
                  "hover:bg-md-light-surface-container hover:dark:bg-md-dark-surface-container"
              )
            : twMerge(
                "bg-md-light-surface-container text-md-light-on-surface dark:bg-md-dark-surface-container dark:text-md-dark-on-surface",
                !props.disabled &&
                  "hover:bg-md-light-surface-dim hover:dark:bg-md-dark-surface-dim"
              ),
          !props.disabled && "cursor-pointer"
        )}
      >
        <h3 className="headline-small">{props.title}</h3>
        {props.disabled || (
          <ChevronDownIcon
            className="transition-[transform] duration-300 ease-in-out"
            height={22}
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        )}
      </section>
      <section
        className={
          "grid overflow-hidden rounded-b-theme-lg px-7 transition-[grid-template-rows,padding] duration-300 ease-in-out"
        }
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          paddingTop: isOpen ? "1.25rem" : "0rem",
          paddingBottom: isOpen ? "1.75rem" : "0rem",
        }}
      >
        <article
          className={twMerge(
            "body-large min-h-0 text-md-light-on-surface transition-[visibility] duration-300 ease-in-out dark:text-md-dark-on-surface",
            props.className
          )}
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          {props.children}
        </article>
      </section>
    </article>
  );
}
