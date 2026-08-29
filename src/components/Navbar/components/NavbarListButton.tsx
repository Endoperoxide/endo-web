type Properties = {
  onClick: () => void;
};

export default function NavbarListButton({ onClick }: Properties) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-full flex-1 cursor-pointer items-center justify-center border-none bg-background-highlight px-4 uppercase text-text-primary sm:flex-none sm:ml-auto sm:px-25"
    >
      Review List
    </button>
  );
}
