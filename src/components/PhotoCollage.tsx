type Properties = {
  primaryImage: string;
  secondaryImage: string;
};

export default function PhotoCollage({
  primaryImage,
  secondaryImage,
}: Properties) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Primary image */}
      <div className="relative aspect-3/4 w-full">
        <img
          src={primaryImage}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      {/* Secondary overlapping image */}
      <div className="absolute -bottom-8 -left-8 w-2/5 aspect-square sm:-bottom-10 sm:-left-10">
        <img
          src={secondaryImage}
          alt=""
          className="h-full w-full object-cover shadow-xl"
        />
      </div>
    </div>
  );
}
