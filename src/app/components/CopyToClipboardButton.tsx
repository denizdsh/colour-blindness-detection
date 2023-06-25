"use client";

import { useState } from "react";
import { CheckIcon, PaperClipIcon, XMarkIcon } from "@heroicons/react/24/solid";

import twMerge from "@/twMerge";
import IButtonProps from "@interfaces/IButtonProps";
import Button from "@components/Button";

interface ICopyButtonProps extends IButtonProps {
  path?: string;
  isFullPath?: boolean;
  iconSize: number;
  iconClassName?: string;
}

export default function CopyToClipboardButton(props: ICopyButtonProps) {
  const { iconSize, children, iconClassName, path, isFullPath, ...btnProps } =
    props;

  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const copyToClipboard = async () => {
    if (copyStatus !== "idle") {
      return;
    }

    let url;

    if (path) {
      url = props.isFullPath ? path : window.origin + "/" + path;
    } else {
      url = window.location.href;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    } finally {
      setTimeout(() => {
        setCopyStatus("idle");
      }, 2500);
    }
  };

  const getButtonColour = () => {
    switch (copyStatus) {
      case "success":
        return "primary";
      case "error":
        return "tertiary";
      default:
        return "surface-variant";
    }
  };

  return (
    <Button
      {...btnProps}
      className={twMerge("px-3 py-3", btnProps.className)}
      colour={getButtonColour()}
      onClick={copyToClipboard}
      IconLeft={
        <CopyIconPerStatus
          copyStatus={copyStatus}
          iconSize={iconSize}
          iconClassName={iconClassName}
        />
      }
    >
      {children}
    </Button>
  );
}

function CopyIconPerStatus(props: {
  iconClassName?: string;
  iconSize: number;
  copyStatus: "idle" | "success" | "error";
}) {
  switch (props.copyStatus) {
    case "success":
      return (
        <CheckIcon className={props.iconClassName} height={props.iconSize} />
      );
    case "error":
      return (
        <XMarkIcon className={props.iconClassName} height={props.iconSize} />
      );
    default:
      return (
        <PaperClipIcon
          className={props.iconClassName}
          height={props.iconSize}
        />
      );
  }
}
