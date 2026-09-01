import { ChevronDown, Check } from "lucide-react";

import type { RatingTier } from "@/utils/rating_utils";

import Dropdown from "@/components/Dropdown/Dropdown";

type Properties = {
  tiers: { label: string; value: RatingTier; range?: string }[];
  activeTier: RatingTier;
  onChange: (value: RatingTier) => void;
};

export default function FilterDropdown({
  tiers,
  activeTier,
  onChange,
}: Properties) {
  const active = tiers.find((tier) => tier.value === activeTier);

  return (
    <div className="shrink-0 bg-background-base">
      {/* Dropdown */}
      <Dropdown
        align="stretch"
        trigger={({ isOpen, toggle }) => (
          <button
            onClick={toggle}
            aria-expanded={isOpen}
            className="flex h-11 w-full cursor-pointer items-center justify-between gap-1 whitespace-nowrap border border-border-base px-3 text-[0.75rem] text-text-secondary hover:border-strong"
          >
            {/* Label */}
            <span className="truncate">{active?.label}</span>

            {/* Icon */}
            <ChevronDown
              size={14}
              className={`ml-2 shrink-0 text-text-muted transition-transform duration-150 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      >
        {(close) => (
          <div className="flex flex-col py-[0.35rem]">
            {tiers.map((tier) => {
              const isActive = tier.value === activeTier;

              return (
                <button
                  key={tier.value}
                  onClick={() => {
                    onChange(tier.value);
                    close();
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between gap-2 border-none bg-transparent px-3 py-2 text-left text-[0.75rem] ${
                    isActive ? "text-text-primary" : "text-text-secondary"
                  }`}
                >
                  {/* Label */}
                  <span className="truncate">{tier.label}</span>

                  {isActive && (
                    <Check size={13} className="shrink-0 text-text-primary" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </Dropdown>
    </div>
  );
}
