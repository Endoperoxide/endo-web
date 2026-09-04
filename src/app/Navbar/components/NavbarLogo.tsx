import logo from "@/assets/Vector/logo.svg";
import { PAGES } from "@/utils/page_utils";

export default function NavbarLogo() {
  return (
    <a
      href={`${PAGES.home.path}`}
      className="flex h-full w-(--navbar-height) items-center justify-center border-none bg-background-highlight p-1.5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background-main p-1.5">
        <img
          src={logo}
          alt="Logo"
          className="h-full w-full object-contain"
          fetchPriority="high"
        />
      </div>
    </a>
  );
}
