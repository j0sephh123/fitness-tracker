import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  toggle: ReactNode;
  onCreate: () => void;
};

export default function Navbar({ toggle , onCreate}: Props) {
  return (
    <div className="navbar bg-slate-500">
      <div className="flex-none">{toggle}</div>
      <div className="flex-1">
        <Link href='/' className="btn-ghost btn text-xl normal-case text-white">daisyUI</Link>
      </div>
      <div className="flex-none">
        <button onClick={onCreate} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
