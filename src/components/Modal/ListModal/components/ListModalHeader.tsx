import ModalHeaderSection from "@/components/Modal/components/ModalHeader";

type Properties = {
  handleClose: () => void;
  reviewedCount: number;
  totalCount: number;
};

export default function ListModalHeader({
  handleClose,
  reviewedCount,
  totalCount,
}: Properties) {
  return (
    <ModalHeaderSection onClose={handleClose}>
      <h1 className="font-bold leading-none text-[clamp(0.8rem,9cqw,1.5rem)] text-text-primary">
        Review List
      </h1>

      <div className="ml-auto tracking-wide shrink-0 text-text-secondary">
        {reviewedCount}/{totalCount}
      </div>
    </ModalHeaderSection>
  );
}
