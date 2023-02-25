import Link from "next/link";
import { ReactNode } from "react";

const links = [
  { path: "/", title: "Home" },
  { path: "/workouts", title: "Workouts" },
  { path: "/exercises", title: "Exercises" },
];

type Props = {
  onLinkClick: () => void;
  overlay: ReactNode;
};

export default function DrawerContent({ onLinkClick, overlay }: Props) {
  return (
    <div className="drawer-side">
      {overlay}
      <ul className="menu w-4/5 bg-slate-600 p-4">
        {links.map(({ path, title }) => (
          <li key={title}>
            <Link onClick={onLinkClick} className="text-white" href={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
