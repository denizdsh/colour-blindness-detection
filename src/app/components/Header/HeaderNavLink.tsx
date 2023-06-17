"use client";

import { usePathname } from "next/navigation";

import twMerge from "@/twMerge";
import IPropsWithClassName from "@interfaces/IPropsWithClassName";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface IHeaderNavLinkProps
  extends LinkProps,
    PropsWithChildren,
    IPropsWithClassName {
  exactMatch?: boolean;
}

export default function HeaderNavLink(props: IHeaderNavLinkProps) {
  const { children, className, exactMatch, ...linkProps } = props;

  const activeLink = usePathname();

  return (
    <Link
      className={twMerge(
        "title-medium relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-md-light-primary after:transition-all hover:text-md-light-primary focus:text-md-light-primary active:after:w-full dark:after:bg-md-dark-primary dark:hover:text-md-dark-primary dark:focus:text-md-dark-primary",
        isActiveLink(activeLink, props.href.toString(), exactMatch)
          ? "after:w-full"
          : "",
        className
      )}
      {...linkProps}
    >
      {props.children}
    </Link>
  );
}

function isActiveLink(
  activeLink: string,
  href: string,
  exactMatch?: boolean
): boolean {
  if (exactMatch) {
    return href === activeLink;
  }

  return activeLink.startsWith(href);
}
