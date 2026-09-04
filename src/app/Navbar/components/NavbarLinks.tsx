import { getNavPages, PAGES, type Page } from "@/utils/page_utils";
import Navlink from "@/app/Navbar/components/Navlink";

type Properties = {
  current: Page;
};

export default function NavbarLinks({ current }: Properties) {
  return (
    <nav className="hidden h-full items-center gap-5 px-10 sm:flex">
      {getNavPages().map((page) => (
        <Navlink
          key={page}
          page={page}
          label={PAGES[page].label}
          active={current === page}
        />
      ))}
    </nav>
  );
}
