import type { Dispatch, SetStateAction } from "react";
import type { RatingTier } from "@/utils/rating_utils";
import FilterDropdown from "./FilterDropdown";

type Properties = {
  tiers: { label: string; value: RatingTier; range?: string }[];
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
};

export default function FilterButtons({
  tiers,
  activeTier,
  setActiveTier,
}: Properties) {
  return (
    <div className="flex items-center gap-2">
      {/* Desktop: full button row */}
      <div className="hidden items-center gap-1 sm:flex">
        {tiers.map((tier) => (
          <button
            key={tier.value}
            type="button"
            onClick={() => setActiveTier(tier.value)}
            className={`whitespace-nowrap border px-3 py-2 text-[0.72rem] transition-colors ${
              activeTier === tier.value
                ? "border-background-highlight text-text-primary"
                : "border-border-base text-text-muted hover:border-strong hover:text-text-primary"
            }`}
          >
            {tier.label}
          </button>
        ))}
      </div>

      {/* Mobile: dropdown */}
      <div className="sm:hidden">
        <FilterDropdown
          tiers={tiers}
          activeTier={activeTier}
          onChange={setActiveTier}
        />
      </div>
    </div>
  );
}
