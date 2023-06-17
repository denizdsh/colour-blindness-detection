import { ReactNode } from "react";
import IButtonProps from "@interfaces/IButtonProps";
import twMerge from "@/twMerge";

export default function Button(props: IButtonProps) {
  const {
    onClick,
    IconLeft,
    IconRight,
    children,
    className,
    colour = "surface-variant",
    ...btnProps
  } = props;

  return (
    <button
      onClick={onClick}
      className={twMerge(
        getButtonColours(colour),
        "flex items-center gap-1 px-4 py-3",
        className
      )}
      {...btnProps}
    >
      {IconLeft && (
        <div
          className={`title-medium text-md-light-on-${colour} dark:text-md-dark-on-${colour}`}
        >
          {IconLeft}
        </div>
      )}

      {children as ReactNode}

      {IconRight && (
        <div
          className={`title-medium text-md-light-on-${colour} dark:text-md-dark-on-${colour}`}
        >
          {IconRight}
        </div>
      )}
    </button>
  );
}

function getButtonColours(colour: "primary" | "tertiary" | "surface-variant") {
  let initialBgOpacity = colour === "surface-variant" ? 50 : 60;

  return `bg-md-light-${colour}/${initialBgOpacity}
    fill-md-light-on-${colour}  
    text-md-light-on-${colour} hover:bg-md-light-${colour}/80 active:bg-md-light-${colour}
    dark:bg-md-dark-${colour}/${initialBgOpacity} dark:fill-md-dark-on-${colour} 
    dark:text-md-dark-on-${colour} dark:hover:bg-md-dark-${colour}/80 dark:active:bg-md-dark-${colour}`;
}

/*
!!default = surface-variant
    bg-md-light-surface-variant/50
      fill-md-light-on-surface-variant  
       text-md-light-on-surface-variant hover:bg-md-light-surface-variant/80 active:bg-md-light-surface-variant
      dark:bg-md-dark-surface-variant/50 dark:fill-md-dark-on-surface-variant 
      dark:text-md-dark-on-surface-variant dark:hover:bg-md-dark-surface-variant/80 dark:active:bg-md-dark-surface-variant

!!primary
    bg-md-light-primary/60
      fill-md-light-on-primary  
       text-md-light-on-primary hover:bg-md-light-primary/80 active:bg-md-light-primary
      dark:bg-md-dark-primary/60 dark:fill-md-dark-on-primary 
      dark:text-md-dark-on-primary dark:hover:bg-md-dark-primary/80 dark:active:bg-md-dark-primary

!!tertiary
    bg-md-light-tertiary/60
      fill-md-light-on-tertiary  
       text-md-light-on-tertiary hover:bg-md-light-tertiary/80 active:bg-md-light-tertiary
      dark:bg-md-dark-tertiary/60 dark:fill-md-dark-on-tertiary 
      dark:text-md-dark-on-tertiary dark:hover:bg-md-dark-tertiary/80 dark:active:bg-md-dark-tertiary
*/
