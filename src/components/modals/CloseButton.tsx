export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <label
      onClick={onClick}
      htmlFor="my-modal-3"
      className="btn-sm btn-circle btn absolute right-2 top-2"
    >
      ✕
    </label>
  );
}
