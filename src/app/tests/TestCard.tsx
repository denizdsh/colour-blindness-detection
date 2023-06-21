import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface ITestCardProps extends PropsWithChildren {
  title: string;
  imageSrc: StaticImageData | string;
  link: string;
}

export default function TestCard(props: ITestCardProps) {
  return (
    <article className="flex rounded-theme-xl bg-md-light-surface dark:bg-md-dark-surface-container-high">
      <section className="flex w-fit items-center justify-center rounded-theme-xl bg-md-light-surface-tint/10 p-10 dark:bg-md-dark-surface/80">
        <Link
          href={props.link}
          className={`relative
          block h-[350px] w-[350px] rounded-theme-circle before:absolute before:left-0 before:top-0 before:z-10 before:hidden before:h-full before:w-full before:rounded-theme-circle 
          before:bg-md-light-surface-variant/80 after:absolute after:left-[50%] after:top-[50%] after:z-20 after:hidden after:h-40 after:w-40  after:translate-x-[-15%] after:translate-y-[-50%] after:border-[5rem] after:border-transparent after:border-l-md-light-on-surface-variant hover:before:block 
          hover:after:block
        dark:before:bg-md-dark-surface-variant/80 dark:after:border-l-md-dark-on-surface-variant `}
        >
          <Image
            fill
            src={props.imageSrc}
            alt={props.title}
            className="rounded-theme-circle"
          />
        </Link>
      </section>

      <section className="flex-1 p-7">
        <h2 className="display-medium text-md-light-primary dark:text-md-dark-primary">
          {props.title}
        </h2>
        <p className="body-large text-md-light-on-surface dark:text-md-dark-on-surface">
          {props.children}
        </p>
      </section>
    </article>
  );
}
