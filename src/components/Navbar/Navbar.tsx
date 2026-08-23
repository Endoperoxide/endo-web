import type { Page } from "@/utils/page_utils";
import NavbarLinks from "./components/NavbarLinks";
import NavbarDropdown from "./components/NavbarDropdown";
import NavbarLogo from "./components/NavbarLogo";

type Properties = {
  current: Page;
  onNavigate: (page: Page) => void;
};

export default function Navbar({ current, onNavigate }: Properties) {
  return (
    <header className="sticky top-0 h-(--navbar-height) z-100 w-full bg-background-main">
      <div className="flex h-full w-full items-center justify-start">
        {/* Logo box */}
        <NavbarLogo onNavigate={onNavigate} />

        {/* Desktop nav links */}
        <NavbarLinks current={current} onNavigate={onNavigate} />

        {/* Mobile dropdown */}
        <NavbarDropdown current={current} onNavigate={onNavigate} />
      </div>
    </header>
  );
}
