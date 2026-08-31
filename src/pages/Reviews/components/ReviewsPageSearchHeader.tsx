import { List } from "lucide-react";
import SearchBar from "./SearchBar";
import { Dispatch, SetStateAction } from "react";
import EyebrowTitle from "@/components/EyebrowTitle";

type Properties = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onOpenList: () => void;
};

export default function ReviewsPageSearchHeader({
  search,
  setSearch,
  onOpenList,
}: Properties) {
  return (
    <div className="flex flex-col gap-2 py-1 sm:flex-row sm:items-center sm:gap-4">
      {/* Title and eyebrow */}
      <EyebrowTitle
        title="All Reviews"
        eyebrow="Repository of all reviews"
        eyebrowColor="text-text-accent"
      />

      {/* Search */}
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:ml-auto sm:max-w-150">
        <SearchBar search={search} setSearch={setSearch} />

        <button
          type="button"
          onClick={onOpenList}
          aria-label="Open list view"
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-border-base text-text-primary hover:border-strong"
        >
          <List size={16} />
        </button>
      </div>
    </div>
  );
}
