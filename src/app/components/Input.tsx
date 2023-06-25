import twMerge from "@/twMerge";
import IPropsWithClassName from "@interfaces/IPropsWithClassName";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IInputProps
  extends IPropsWithClassName,
    DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {}

export default function Input(props: IInputProps) {
  const { className, ...inputProps } = props;
  return (
    <input
      {...inputProps}
      className={twMerge(
        "rounded-theme-lg border-none bg-md-light-surface-variant/80 p-4 text-md-light-on-surface-variant outline-none transition-all focus:bg-md-light-surface-variant focus:outline-2 focus:outline-md-light-primary/80 dark:bg-md-dark-surface-variant/80 dark:text-md-dark-on-surface-variant dark:focus:bg-md-dark-surface-variant dark:focus:outline-md-dark-primary/80",
        className
      )}
    />
  );
}
