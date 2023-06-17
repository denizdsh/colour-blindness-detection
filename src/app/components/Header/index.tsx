import { ChevronDownIcon } from "@heroicons/react/24/solid";

import HeaderButton from "./HeaderButton";
import HeaderNav from "./HeaderNav";
import ThemeToggle from "./ThemeToggle";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-[1px] border-b-md-light-outline-variant px-10 py-2.5 dark:border-b-md-dark-outline-variant ">
      <section className="flex items-center justify-between gap-10">
        <HeaderLogo />

        <HeaderNav />
      </section>

      <section className="flex items-center justify-between gap-3.5">
        <ThemeToggle />
        <HeaderButton
          className="gap-[2px] rounded-theme-sm border-[1px] border-md-light-outline-variant/50 px-1.5 py-2 dark:border-md-dark-outline-variant/50"
          IconRight={<ChevronDownIcon width={12} />}
        >
          EN
        </HeaderButton>
      </section>
    </header>
  );
}
