import type { Dispatch, SetStateAction } from "react";
import { Search, X } from "lucide-react";

type Properties = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({ search, setSearch }: Properties) {
  return (
    <div className="flex h-11 w-full items-center ">
      <Search size={15} className="ml-3 shrink-0 text-text-muted" />

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by title…"
        className="h-full min-w-0 flex-1 px-2 text-[0.78rem] text-text-primary outline-none placeholder:text-text-muted"
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          aria-label="Clear search"
          className="flex cursor-pointer border-none mr-3 text-text-muted transition-colors hover:text-text-primary"
        >
          <X size={13} />
        </button>
      )}
    </div>
  );
}
