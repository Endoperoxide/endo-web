import logo from "@/assets/Logo/logo.png";
import { Page } from "@/utils/page_utils";

type Properties = {
  onNavigate: (page: Page) => void;
};

export default function NavbarLogo({ onNavigate }: Properties) {
  return (
    <button
      type="button"
      onClick={() => onNavigate("home")}
      className="flex h-full shrink-0 w-(--navbar-height) items-center justify-center border-none bg-background-highlight p-0 cursor-pointer"
    >
      <img
        src={logo}
        alt="Logo"
        className="block h-12 w-auto"
        fetchPriority="high"
      />
    </button>
  );
}
