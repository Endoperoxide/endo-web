// Navbar.tsx

import type { Page } from "@/utils/page_utils";
import logo from "@/assets/Logo/logo.png";
import NavbarLinks from "./components/NavbarLinks";
import NavbarDropdown from "./components/NavbarDropdown";
import NavbarLogo from "./components/NavbarLogo";
import NavbarListButton from "./components/NavbarListButton";

export const NAVBAR_HEIGHT: string = "60px";

type Properties = {
  current: Page;
  onNavigate: (page: Page) => void;
  onListClick: () => void;
};

export default function Navbar({
  current,
  onNavigate,
  onListClick,
}: Properties) {
  return (
    <header
      style={{ height: NAVBAR_HEIGHT }}
      className="sticky top-0 z-100 w-full bg-background-main"
    >
      <div className="flex h-full w-full items-center justify-start">
        {/* Logo box */}
        <NavbarLogo onNavigate={onNavigate} />

        {/* Desktop nav links */}
        <NavbarLinks current={current} onNavigate={onNavigate} />

        {/* <NavbarListButton onClick={onListClick} /> */}

        {/* Mobile dropdown */}
        <NavbarDropdown current={current} onNavigate={onNavigate} />
      </div>
    </header>
  );
}
