import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-5">
      <Link className="text-white" href="/">Home</Link>
      <Link className="text-white" href="/workouts">Workouts</Link>
      <Link className="text-white" href="/workouts/create">Create a workout</Link>
      <Link className="text-white" href="/exercises">Exercises</Link>
      <Link className="text-white" href="/exercises/create">Create an exercise</Link>
    </nav>
  );
}
