import type { Page } from "@/utils/page_utils";
import { PAGES } from "@/utils/page_utils";

import Dropdown from "@/components/Dropdown/Dropdown";
import Navlink from "@/components/Navbar/components/Navlink";

type Properties = {
  current: Page;
};

export default function NavbarDropdown({ current }: Properties) {
  return (
    <div className="ml-auto flex items-center sm:hidden">
      <Dropdown
        fullBleed
        fullBleedTop="var(--navbar-height)"
        trigger={({ isOpen, toggle }) => (
          <button
            type="button"
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-full w-(--navbar-height) shrink-0 cursor-pointer flex-col items-center justify-center gap-1.25 border-none bg-transparent p-0"
          >
            <span
              className="h-0.5 w-5.5 bg-white transition-[transform,opacity] duration-200 ease-in-out"
              style={{
                transform: isOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />

            <span
              className="h-0.5 w-5.5 bg-white transition-opacity duration-200 ease-in-out"
              style={{ opacity: isOpen ? 0 : 1 }}
            />

            <span
              className="h-0.5 w-5.5 bg-white transition-[transform,opacity] duration-200 ease-in-out"
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
                <Navlink
                  page={page}
                  label={label}
                  active={current === page}
                  onClick={close}
                />
              </div>
            ))}
          </nav>
        )}
      </Dropdown>
    </div>
  );
}
