import HeaderNavLink from "./HeaderNavLink";

export default function HeaderNav() {
  return (
    <nav className="flex items-center gap-5">
      <HeaderNavLink href="/" exactMatch>
        Home
      </HeaderNavLink>

      <HeaderNavLink href="/tests">Colour Tests</HeaderNavLink>
    </nav>
  );
}
