import { ratingColor } from "@/utils/rating_utils";

type Properties = {
  rating: number;
  size?: "small" | "medium" | "large";
};

// Size for the badge itself
const SIZE_CLASSES = {
  small: "w-[clamp(24px,11cqw,34px)] h-[clamp(34px,15cqw,48px)]",
  medium: "w-[clamp(30px,13cqw,44px)] h-[clamp(42px,18cqw,62px)]",
  large: "w-[clamp(38px,16cqw,56px)] h-[clamp(54px,22cqw,80px)]",
};

// Size for the number value
const NUM_SIZE_CLASSES = {
  small: "text-[clamp(0.6rem,4.2cqw,0.85rem)]",
  medium: "text-[clamp(1.25rem,5cqw,1.05rem)]",
  large: "text-[clamp(1.5rem,6cqw,1.35rem)]",
};

export default function RatingBadge({ rating, size = "medium" }: Properties) {
  const color = ratingColor(rating);
  const displayValue = rating % 1 === 0 ? `${rating}.0` : rating;

  return (
    <div
      className={`pointer-events-none absolute top-0 right-0 border-2 border-white/55 shadow-[0_3px_6px_rgba(0,0,0,0.4)] [clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)] ${SIZE_CLASSES[size]}`}
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Displayed value*/}
        <div
          className={`font-display font-bold leading-none text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.5)] ${NUM_SIZE_CLASSES[size]}`}
        >
          {displayValue}
        </div>
      </div>
    </div>
  );
}
