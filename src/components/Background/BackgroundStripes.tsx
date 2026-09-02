export default function BackgroundStripes() {
  return (
    <div
      className="h-10 flex-1"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent 0px,
          transparent 12px,
          #fff 12px,
          #fff 24px
        )`,
      }}
    />
  );
}
