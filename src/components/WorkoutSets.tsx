import { Workout } from "@prisma/client";
import { api } from "../utils/api";

type Props = {
  workoutId: Workout["id"];
};

export default function WorkoutSets({ workoutId }: Props) {
  const { data } = api.workouts.getSets.useQuery({ workoutId });

  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <div>
      {data.map((workoutSet) => (
        <div className="text-white" key={workoutSet.id}>
          <span>{workoutSet.reps}</span> x <span>{workoutSet.weight}</span>
          kg
        </div>
      ))}
    </div>
  );
}
