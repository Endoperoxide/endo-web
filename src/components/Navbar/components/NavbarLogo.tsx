import logo from "@/assets/Logo/logo.png";

export default function NavbarLogo() {
  return (
    <a
      href="/endo-web/"
      className="flex h-full w-(--navbar-height) cursor-pointer items-center justify-center border-none bg-background-highlight p-1.5"
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
