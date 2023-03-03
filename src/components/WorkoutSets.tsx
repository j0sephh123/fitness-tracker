import { Workout } from "@prisma/client";
import { api } from "../utils/api";
import SingleWorkoutSet from "./SingleWorkoutSet/SingleWorkoutSet";

type Props = {
  workoutId: Workout["id"];
};

export default function WorkoutSets({ workoutId }: Props) {
  const { data, refetch } = api.workouts.getSets.useQuery({
    workoutId,
  });
  const { mutate: update } = api.workouts.updateSets.useMutation({
    onSuccess: () => refetch(),
  });
  const { mutate: duplicate } = api.workouts.duplicateWorkoutSet.useMutation({
    onSuccess: () => refetch(),
  });
  const { mutate: remove } = api.workouts.removeWorkoutSet.useMutation({
    onSuccess: () => refetch(),
  });

  if (!data) {
    return null;
  }

  return (
    <div>
      {data.map((workoutSet) => (
        <SingleWorkoutSet
          onRemove={() =>
            remove({
              id: workoutSet.id,
            })
          }
          update={update}
          onDuplicate={() =>
            duplicate({
              id: workoutSet.id,
            })
          }
          key={workoutSet.id}
          workoutSet={workoutSet}
        />
      ))}
    </div>
  );
}
