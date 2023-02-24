import { Workout } from "@prisma/client";
import Link from "next/link";

const GoBack = ({ id }: { id: Workout["id"] }) => (
  <Link className="text-white" href={`/workouts/${id}`}>
    Back to workout
  </Link>
);

export default GoBack;
