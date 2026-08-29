import type { Dispatch, SetStateAction } from "react";
import { Search, X } from "lucide-react";

type Properties = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({ search, setSearch }: Properties) {
  return (
    <div className="flex h-11 w-full items-center border border-border-base bg-background-base">
      <Search size={15} className="ml-3.5 shrink-0 text-text-muted" />

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by title…"
        className="box-border h-full min-w-0 flex-1 border-none bg-transparent px-2 text-[0.78rem] text-text-primary outline-none placeholder:text-text-muted"
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          aria-label="Clear search"
          className="flex shrink-0 cursor-pointer border-none bg-transparent p-1.5 text-text-muted transition-colors hover:text-text-primary"
        >
          <X size={13} />
        </button>
      )}
    </div>
  );
}
