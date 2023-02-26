import { PropsWithChildren } from "react";

type Props = {
  isOpen: boolean;
} & PropsWithChildren;

export default function ModalWrapper({ isOpen, children }: Props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isOpen}
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative bg-slate-500">{children}</div>
      </div>
    </div>
  );
}
