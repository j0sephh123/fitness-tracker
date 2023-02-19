import { Workout } from "@prisma/client";

type Props = {
  workouts: Workout[];
};

export default function WorkoutsPage({ workouts }: Props) {
  return (
    <div>
      {workouts.map((workout) => (
        <div className="text-white" key={workout.summary}>
          {workout.summary}
        </div>
      ))}
    </div>
  );
}
