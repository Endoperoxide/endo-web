import { PAGES } from "@/utils/page_utils";

import Navlink from "@/components/Navbar/components/Navlink";

type Properties = {
  current: (typeof PAGES)[number]["page"];
};

export default function NavbarLinks({ current }: Properties) {
  return (
    <nav className="hidden h-full items-center gap-5 px-10 sm:flex">
      {PAGES.map(({ page, label }) => (
        <Navlink
          key={page}
          page={page}
          label={label}
          active={current === page}
        />
      ))}
    </nav>
  );
}
