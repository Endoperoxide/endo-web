import logo from "@/assets/Logo/logo.png";
import { PAGES } from "@/utils/page_utils";

export default function NavbarLogo() {
  return (
    <a
      href={`${PAGES.home.path}`}
      className="flex h-full w-(--navbar-height) items-center justify-center border-none bg-background-highlight p-1.5"
    >
      <img
        src={logo}
        alt="Logo"
        className="object-contain"
        fetchPriority="high"
      />
    </a>
  );
}
