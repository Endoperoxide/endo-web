import type { Page } from "@/utils/page_utils";
import { PAGES } from "@/utils/page_utils";
import NavLink from "@/components/Navbar/components/NavLink";
import Dropdown from "@/components/Dropdown/Dropdown";
import logo from "@/assets/Logo/logo.png";

export const NAVBAR_HEIGHT: string = "60px";

type Properties = {
  current: Page;
  onNavigate: (page: Page) => void;
};

export default function Navbar({ current, onNavigate }: Properties) {
  return (
    <header
      style={{ height: NAVBAR_HEIGHT }}
      className="sticky top-0 z-100 w-full bg-background-main"
    >
      <div className="flex h-full w-full items-center justify-start">
        {/* Logo box */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          style={{ width: NAVBAR_HEIGHT }}
          className="flex h-full shrink-0 items-center justify-center border-none bg-background-bright p-0 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="block h-12 w-auto" />
        </button>

        {/* Desktop nav links */}
        <nav className="hidden sm:flex h-full items-center gap-5 px-5">
          {PAGES.map(({ page, label }) => (
            <NavLink
              key={page}
              page={page}
              label={label}
              active={current === page}
              onClick={() => onNavigate(page)}
            />
          ))}
        </nav>

        {/* Mobile drop down */}
        <div className="ml-auto mr-4 block sm:hidden">
          <Dropdown
            fullBleed
            fullBleedTop={NAVBAR_HEIGHT}
            trigger={({ isOpen, toggle }) => (
              <button
                onClick={toggle}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="flex h-8 w-8 flex-col items-center justify-center gap-1.25 border-none bg-transparent p-0 cursor-pointer"
              >
                <span
                  className="h-0.5 w-5.5 bg-white transition-[transform,opacity] duration-200 ease-in-out"
                  style={{
                    transform: isOpen
                      ? "translateY(7px) rotate(45deg)"
                      : "none",
                  }}
                />
                <span
                  className="h-0.5 w-5.5 bg-primary transition-opacity duration-200 ease-in-out"
                  style={{ opacity: isOpen ? 0 : 1 }}
                />
                <span
                  className="h-0.5 w-5.5 bg-primary transition-[transform,opacity] duration-200 ease-in-out"
                  style={{
                    transform: isOpen
                      ? "translateY(-7px) rotate(-45deg)"
                      : "none",
                  }}
                />
              </button>
            )}
          >
            {(close) => (
              <nav className="flex flex-col py-2">
                {PAGES.map(({ page, label }) => (
                  <div key={page} className="px-5 py-3">
                    <NavLink
                      page={page}
                      label={label}
                      active={current === page}
                      onClick={() => {
                        onNavigate(page);
                        close();
                      }}
                    />
                  </div>
                ))}
              </nav>
            )}
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
