type Properties = {
  paragraphs: string[];
};

export default function AboutMeText({ paragraphs }: Properties) {
  return (
    <div>
      <div className="space-y-[1.1rem]">
        {/* List of all paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="max-w-[45ch] font-body text-[1rem] font-light leading-widest text-secondary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
