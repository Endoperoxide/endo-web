import { useEffect, useState } from "react";
import { ratingGradientColor } from "@/utils/rating_utils";

type Properties = {
  label: string;
  value: number;
};

export default function GameCategoryScoreRow({ label, value }: Properties) {
  const color = ratingGradientColor(value);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setAnimatedValue(value);
    });

    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div>
      <div className="flex items-baseline justify-between">
        {/* Category label */}
        <h1 className="text-[0.6rem] uppercase tracking-widest text-text-muted">
          {label}
        </h1>

        {/* Category value */}
        <span className="text-[0.7rem] font-semibold" style={{ color }}>
          {value.toFixed(1)}
        </span>
      </div>

      {/* Display progress bar */}
      <div className="h-1 bg-border-base">
        <div
          className="h-full rounded-xs transition-[width] duration-1000 ease-out"
          style={{
            width: `${(animatedValue / 10) * 100}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
