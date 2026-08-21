import { PODIUM_RECORD } from "@/utils/rating_utils";

export default function RankBadge({ rank }: { rank: number }) {
  const meta = PODIUM_RECORD[rank];
  const padded = String(rank).padStart(2, "0");

  return (
    <div className="flex items-end gap-4">
      <span
        className="select-none font-display text-[4.5rem] font-light italic leading-none"
        style={{
          color: meta.color,
          textShadow: `0 0 32px ${meta.glow}`,
        }}
      >
        {padded}
      </span>

      {/* Medal name + divider */}
      <div className="flex flex-col gap-1 pb-2.5">
        <span
          className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
          style={{
            color: meta.color,
            opacity: 0.8,
          }}
        >
          {meta.label}
        </span>

        <div
          className="h-px w-12"
          style={{
            backgroundColor: meta.color,
            opacity: 0.35,
          }}
        />
      </div>
    </div>
  );
}
