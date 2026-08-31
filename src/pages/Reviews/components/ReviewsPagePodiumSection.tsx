import EyebrowTitle from "@/components/EyebrowTitle";
import PlusDivider from "@/components/PlusDivider";
import fayeConfused from "@/assets/Faye/faye_confused.png";

export default function ReviewsPagePodiumSection() {
  return (
    <section>
      <PlusDivider />
      <EyebrowTitle
        title="Hall of fame"
        eyebrow="hand-picked top 10 games"
        eyebrowColor="text-text-accent"
      />

      <div className="relative z-1 flex flex-col">
        <div className="flex w-full max-w-2xl flex-col gap-2 text-left">
          <p className="text-base tracking-wide text-text-secondary">
            It takes me a while to evaluate my thoughts on all the games i have
            played! Please bear with me whilst this section is still being made!
          </p>
        </div>

        <img
          src={fayeConfused}
          alt=""
          fetchPriority="low"
          className="h-[80vh] w-auto shrink self-center"
        />
      </div>
    </section>
  );
}
