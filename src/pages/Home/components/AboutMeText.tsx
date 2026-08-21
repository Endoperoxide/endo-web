type Properties = {
  paragraphs: string[];
};

export default function AboutMeText({ paragraphs }: Properties) {
  return (
    <div>
      <div className="mb-3 font-body text-[0.75rem] uppercase tracking-widest text-accent">
        What is this site?
      </div>

      <h3 className="mb-[1.1rem] font-body text-[1.4rem] font-medium text-primary">
        About this site
      </h3>

      <div className="space-y-[1.1rem]">
        {/* List of all paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="max-w-[60ch] font-body text-[1rem] font-light leading-widest text-secondary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
