import logo from "@/assets/Logo/logo.png";
import { Page } from "@/utils/page_utils";
import { NAVBAR_HEIGHT } from "@/components/Navbar/Navbar";

type Properties = {
  onNavigate: (page: Page) => void;
};

export default function NavbarLogo({ onNavigate }: Properties) {
  return (
    <button
      type="button"
      onClick={() => onNavigate("home")}
      style={{ width: NAVBAR_HEIGHT }}
      className="flex h-full shrink-0 items-center justify-center border-none bg-background-bright p-0 cursor-pointer"
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
