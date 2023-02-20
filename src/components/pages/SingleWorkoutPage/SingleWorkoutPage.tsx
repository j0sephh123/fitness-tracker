import { Workout } from "@prisma/client";

type Props = {
  workout: Workout;
};

export default function SingleWorkoutPage({ workout }: Props) {
  return <div className="text-white">Single Workout {workout.summary}</div>;
}
