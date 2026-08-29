type Properties = {
  paragraphs: string[];
};

export default function AboutMeText({ paragraphs }: Properties) {
  return (
    <div>
      <div className="space-y-5">
        {/* List of all paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="md:max-w-[50ch] text-[1rem] font-light leading-widest text-text-secondary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
