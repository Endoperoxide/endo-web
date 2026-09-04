import BackgroundStripes from "@/components/Background/BackgroundStripes";
import logo from "@/assets/Vector/logo.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col text-text-primary bg-background-highlight py-5">
      <div>
        <BackgroundStripes />
      </div>

      <div className="flex items-center justify-between pt-5">
        <div className="flex flex-row items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 shrink-0 object-contain"
            fetchPriority="high"
          />

          <span className="font-body text-[0.7rem] uppercase tracking-widest">
            Endoperoxide
          </span>
        </div>

        <span className="font-body text-[0.7rem] uppercase tracking-widest">
          © 2026
        </span>
      </div>
    </footer>
  );
}
