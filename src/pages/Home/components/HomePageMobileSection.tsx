import ImageHoverGallery from "@/components/ImageHoverGallery/ImageHoverGallery";
import temp1 from "@/assets/Temp/image-18.webp";
import temp2 from "@/assets/Temp/image-2.webp";
import temp3 from "@/assets/Temp/image-52.webp";
import temp4 from "@/assets/Temp/image-56.webp";
import temp5 from "@/assets/Temp/image-58.webp";
import { useResponsiveCount } from "@/components/ImageHoverGallery/hooks/useResponsiveCount";

const allImages = [
  { src: temp1, alt: "..." },
  { src: temp2, alt: "..." },
  { src: temp3, alt: "..." },
  { src: temp4, alt: "..." },
  { src: temp5, alt: "..." },
  { src: temp1, alt: "..." },
  { src: temp2, alt: "..." },
  { src: temp3, alt: "..." },
  { src: temp4, alt: "..." },
  { src: temp5, alt: "..." },
];

export default function HomePageMobileSection() {
  const visibleCount = useResponsiveCount(
    [
      { minWidth: 1300, count: 9 },
      { minWidth: 1000, count: 5 },
    ],
    3,
  );

  return (
    <section className="bg-background-highlight content-padding-horizontal h-[60vh]">
      {/* <h1 className="text-text-primary uppercase">About</h1> */}
      <div className="h-full w-full py-5">
        <ImageHoverGallery images={allImages.slice(0, visibleCount)} />
      </div>
    </section>
  );
}
