import type { Dispatch, SetStateAction } from "react";
import type { RatingTier } from "@/utils/rating_utils";
import FilterDropdown from "@/pages/Reviews/components/FilterDropdown";
import { Search, X } from "lucide-react";

type Properties = {
  tiers: { label: string; value: RatingTier; range?: string }[];
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
  filtered: any[];
  onFilterChange: (filter: RatingTier) => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function FilterBar({
  tiers,
  activeTier,
  setActiveTier,
  onFilterChange,
  search,
  setSearch,
}: Properties) {
  const handleTierChange = (value: RatingTier) => {
    setActiveTier(value);
    onFilterChange(value);
  };

  return (
    <div className="flex w-full justify-center px-4">
      <div className="flex h-10 w-full max-w-170 items-center border border-border-base bg-background-base">
        {/* Icon */}
        <Search size={15} className="ml-3.5 shrink-0 text-muted" />

        {/* Input */}
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by title…"
          className="box-border h-full min-w-0 flex-1 border-none bg-transparent px-2 font-body text-[0.78rem] text-primary outline-none placeholder:text-muted"
        />

        {/* Remove text button */}
        {search && (
          <button
            onClick={() => setSearch("")}
            aria-label="Clear search"
            className="flex shrink-0 cursor-pointer border-none bg-transparent p-1.5 text-muted transition-colors hover:text-primary"
          >
            <X size={13} />
          </button>
        )}

        {/* Dropdown */}
        <FilterDropdown
          tiers={tiers}
          activeTier={activeTier}
          onChange={handleTierChange}
        />
      </div>
    </div>
  );
}
