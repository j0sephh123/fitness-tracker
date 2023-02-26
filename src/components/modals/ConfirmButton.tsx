type Props = { onClick: () => void };

export default function ConfirmButton({ onClick }: Props) {
  return (
    <button className="btn w-full" onClick={onClick}>
      Submit
    </button>
  );
}
