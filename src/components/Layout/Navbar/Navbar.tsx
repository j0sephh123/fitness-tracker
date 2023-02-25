import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap gap-5 border-b-white border-b">
      <Link className="text-white" href="/">
        Home
      </Link>
      <Link className="text-white" href="/workouts">
        Workouts
      </Link>
      <Link className="text-white" href="/exercises">
        Exercises
      </Link>
    </nav>
  );
}
