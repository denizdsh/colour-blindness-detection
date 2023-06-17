import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactNode,
} from "react";

import IPropsWithClassName from "./IPropsWithClassName";

export default interface IButtonProps
  extends IPropsWithClassName,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  IconLeft?: ReactNode;
  IconRight?: ReactNode;
  colour?: "primary" | "tertiary" | "surface-variant";
}
