import fayeConfused from "@/assets/Faye/faye_confused.png";

export default function GameCardCarouselEmpty() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <p className="text-center text-xs tracking-widest text-text-muted">
        No games found!
        <br />
        Some games might not have been
        <br />
        reviewed by me yet!
      </p>

      <img
        src={fayeConfused}
        alt="Faye Confused"
        className="h-[60vh] max-h-[80%]"
        fetchPriority="low"
      />
    </div>
  );
}
