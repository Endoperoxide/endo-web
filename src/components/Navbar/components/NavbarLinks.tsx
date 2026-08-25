import { Page, PAGES } from "@/utils/page_utils";
import Navlink from "@/components/Navbar/components/Navlink";

type Properties = {
  current: Page;
  onNavigate: (page: Page) => void;
};

export default function NavbarLinks({ current, onNavigate }: Properties) {
  return (
    <>
      {/* Desktop nav links */}
      <nav className="hidden sm:flex h-full items-center gap-5 px-5">
        {PAGES.map(({ page, label }) => (
          <Navlink
            key={page}
            page={page}
            label={label}
            active={current === page}
            onClick={() => onNavigate(page)}
          />
        ))}
      </nav>
    </>
  );
}
