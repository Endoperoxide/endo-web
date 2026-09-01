import type { Page } from "@/utils/page_utils";

import NavbarLinks from "./components/NavbarLinks";
import NavbarDropdown from "./components/NavbarDropdown";
import NavbarLogo from "./components/NavbarLogo";

type Properties = {
  current: Page;
};

export default function Navbar({ current }: Properties) {
  return (
    <header className="sticky top-0 z-100 h-(--navbar-height) w-full bg-background-main">
      <div className="flex h-full w-full items-center justify-start">
        <NavbarLogo />

        <NavbarLinks current={current} />

        <NavbarDropdown current={current} />
      </div>
    </header>
  );
}
