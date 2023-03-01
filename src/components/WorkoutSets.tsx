import { Workout } from "@prisma/client";
import { api } from "../utils/api";
import IconButton from "./Shared/buttons/IconButton";
import SingleWorkoutSet from "./SingleWorkoutSet";

type Props = {
  workoutId: Workout["id"];
};

export default function WorkoutSets({ workoutId }: Props) {
  const { data, refetch, isFetching } = api.workouts.getSets.useQuery({
    workoutId,
  });
  const { mutate } = api.workouts.updateSets.useMutation({
    onSuccess: () => refetch(),
  });

  if (!data) {
    return null;
  }

  console.log(data);

  // field is reps or weight

  return (
    <div>
      {data.map((workoutSet) => (
        <SingleWorkoutSet key={workoutSet.id} workoutSet={workoutSet} />
      ))}
    </div>
  );
}
