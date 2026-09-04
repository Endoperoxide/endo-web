type Properties = {
  color?: string;
  height?: string;
};

export default function BackgroundStripes({
  color = "currentColor",
  height = "2.5rem",
}: Properties) {
  return (
    <div
      className="flex-1"
      style={{
        height,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent 0px,
          transparent 12px,
          ${color} 12px,
          ${color} 24px
        )`,
      }}
    />
  );
}
