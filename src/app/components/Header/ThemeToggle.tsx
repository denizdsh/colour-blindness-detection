import { useTheme } from "@contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import HeaderButton from "./HeaderButton";
import { MouseEventHandler } from "react";

export default function ThemeToggle() {
  const theme = useTheme();

  return (
    <HeaderButton
      title="Dark/Light Theme"
      className="h-22 w-22 rounded-theme-circle"
      IconLeft={theme.dark ? <MoonIcon width={22} /> : <SunIcon width={22} />}
      onClick={theme.toggleTheme as MouseEventHandler}
    />
  );
}
