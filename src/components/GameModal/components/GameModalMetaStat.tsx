type Properties = {
  label: string;
  value: string;
};

export default function GameModalMetaStat({ label, value }: Properties) {
  return (
    <div className="text-right">
      {/* Meta label */}
      <div className="font-mono text-[0.55rem] text-muted tracking-widest uppercase">
        {label}
      </div>

      {/* Meta value */}
      <div className="font-body text-[0.7rem] text-primary font-medium">
        {value}
      </div>
    </div>
  );
}
