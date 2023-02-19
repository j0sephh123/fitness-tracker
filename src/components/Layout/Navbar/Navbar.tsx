import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link className="text-white" href="/">Home</Link>
      <Link className="text-white" href="/workouts">Workouts</Link>
      <Link className="text-white" href="/workouts/create">Create a workout</Link>
    </nav>
  );
}
