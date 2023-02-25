import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  toggle: ReactNode;
};

export default function Navbar({ toggle }: Props) {
  return (
    <div className="navbar">
      <div className="flex-none">{toggle}</div>
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case text-white">daisyUI</a>
      </div>
      <div className="flex-none">
        <Link className="text-white" href="/workouts/create">
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
        </Link>
      </div>
    </div>
  );
}
