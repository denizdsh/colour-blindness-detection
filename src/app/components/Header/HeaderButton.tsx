import twMerge from "@/twMerge";
import Button from "@components/Button";
import IButtonProps from "@interfaces/IButtonProps";

export default function HeaderButton(props: IButtonProps) {
  const { className, children, ...btnProps } = props;

  return (
    <Button
      type="button"
      className={twMerge(
        `body-medium gap-0 bg-transparent px-2 py-2 hover:bg-md-light-surface-variant/50
         active:bg-md-light-surface-variant/80 dark:bg-transparent
         dark:hover:bg-md-dark-surface-variant/50 dark:active:bg-md-dark-surface-variant/80`,
        props.className
      )}
      {...btnProps}
    >
      {props.children}
    </Button>
  );
}
