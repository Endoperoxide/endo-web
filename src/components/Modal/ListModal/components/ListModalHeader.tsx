import ModalHeader from "@/components/Modal/components/ModalHeader";

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
    <ModalHeader onClose={handleClose}>
      <span className="font-display font-bold leading-none text-[clamp(0.8rem,9cqw,1.5rem)] text-primary">
        Review List
      </span>

      <div className="ml-auto tracking-wide shrink-0 text-secondary">
        {reviewedCount}/{totalCount}
      </div>
    </ModalHeader>
  );
}
