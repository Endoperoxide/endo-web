type Properties = {
  children: React.ReactNode;
  variant?: "highlight" | "muted";
};

const variantStyles = {
  highlight: "border-background-highlight bg-background-base",
  muted: "border-pink-900 bg-pink-900/20",
};

export default function TextBox({
  children,
  variant = "highlight",
}: Properties) {
  return (
    <div
      className={`flex items-stretch rounded-r-md border-l-4 ${variantStyles[variant]}`}
    >
      <div className="px-4 py-3">{children}</div>
    </div>
  );
}
