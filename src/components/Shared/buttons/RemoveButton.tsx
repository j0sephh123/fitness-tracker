import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
  isLoading: boolean;
} & PropsWithChildren;

export default function RemoveButton({ children, onClick, isLoading }: Props) {
  return (
    <button onClick={onClick} className="border bg-red-600">
      {isLoading ? "Loading..." : children}
    </button>
  );
}
