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
    <div className="min-w-27.5 max-w-50 flex-1 basis-32.5">
      {/* Dropdown */}
      <Dropdown
        align="stretch"
        trigger={({ isOpen, toggle }) => (
          <button
            onClick={toggle}
            aria-expanded={isOpen}
            className="flex w-full cursor-pointer items-center justify-between border-none bg-background-main px-3 py-2.5 font-body text-[0.75rem] text-primary"
          >
            {/* Label and range */}
            <span>
              {active?.label}
              {active?.range ? ` (${active.range})` : ""}
            </span>

            {/* Icon */}
            <ChevronDown
              size={14}
              className={`ml-2 shrink-0 text-muted transition-transform duration-150 ease-in-out ${
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
                  className={`flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-3 py-2 text-left font-body text-[0.75rem] ${
                    isActive ? "text-primary" : "text-secondary"
                  }`}
                >
                  {/* Label and range */}
                  <span>
                    {tier.label}
                    {tier.range ? ` (${tier.range})` : ""}
                  </span>

                  {isActive && <Check size={13} className="text-primary" />}
                </button>
              );
            })}
          </div>
        )}
      </Dropdown>
    </div>
  );
}
