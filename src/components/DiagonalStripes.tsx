export default function DiagonalStripes({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-16 shrink-0 self-stretch ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent 0px,
          transparent 24px,
          #fff 24px,
          #fff 48px
        )`,
      }}
    />
  );
}
