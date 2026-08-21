import TriangleBackground from "@/components/TriangleBackground";
import fayeConfused from "@/assets/Faye/faye_confused.png";

export default function FamePageWIPSection() {
  return (
    <section className="relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden">
      <TriangleBackground />

      <div className="relative z-1 flex max-w-full flex-row items-center justify-center gap-6 px-6">
        <p className="max-w-52 shrink-0 text-right font-mono text-base uppercase tracking-[0.18em] text-primary">
          It takes me a while to evaulate my thoughts on all the games i have
          played!
        </p>

        <img
          src={fayeConfused}
          alt=""
          className="h-[80vh] w-auto shrink drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
        />

        <p className="max-w-52 shrink-0 text-left font-mono text-base uppercase tracking-[0.18em] text-primary">
          bear with me whilst this page is still being made!
        </p>
      </div>
    </section>
  );
}
