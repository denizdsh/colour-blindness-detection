import Image from "next/image";
import Link from "next/link";

import logoDark from "@images/logo_text.png";
import logoLight from "@images/logo_text_light.png";
import { useTheme } from "@contexts/ThemeContext";

export default function HeaderLogo() {
  const theme = useTheme();
  return (
    <article id="logo">
      <Link href="/">
        <Image src={theme.dark ? logoDark : logoLight} height={24} alt="CBD" />
      </Link>
    </article>
  );
}
