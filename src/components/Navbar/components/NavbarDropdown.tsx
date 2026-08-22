import type { Page } from "@/utils/page_utils";
import { PAGES } from "@/utils/page_utils";
import Dropdown from "@/components/Dropdown/Dropdown";
import NavLink from "@/components/Navbar/components/NavLink";
import { NAVBAR_HEIGHT } from "@/components/Navbar/Navbar";

type Properties = {
  current: Page;
  onNavigate: (page: Page) => void;
};

export default function NavbarDropdown({ current, onNavigate }: Properties) {
  return (
    <div className="ml-auto flex items-center sm:hidden">
      <Dropdown
        fullBleed
        fullBleedTop={NAVBAR_HEIGHT}
        trigger={({ isOpen, toggle }) => (
          <button
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            style={{ width: NAVBAR_HEIGHT }}
            className="flex h-full shrink-0 flex-col items-center justify-center gap-1.25 border-none bg-transparent p-0 cursor-pointer"
          >
            <span
              className="h-0.5 w-5.5 bg-white transition-[transform,opacity] duration-200 ease-in-out"
              style={{
                transform: isOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="h-0.5 w-5.5 bg-primary transition-opacity duration-200 ease-in-out"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span
              className="h-0.5 w-5.5 bg-primary transition-[transform,opacity] duration-200 ease-in-out"
              style={{
                transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none",
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
  );
}
