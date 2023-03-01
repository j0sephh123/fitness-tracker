import { Exercise, WorkoutSet } from "@prisma/client";
import IconButton from "./Shared/buttons/IconButton";

type Props = {
  workoutSet: WorkoutSet & {
    exercise: Exercise;
  };
  mutate: () => void;
};

export default function SingleWorkoutSet({ workoutSet, mutate }: Props) {
  const onClick = () => {
    
  }

  return (
    <div className="text-white" key={workoutSet.id}>
      {workoutSet.exercise.title}
      <IconButton
        type="minus"
        onClick={() =>
          mutate({
            field: "reps",
            id: workoutSet.id,
            value: workoutSet.reps - 1,
          })
        }
      />
      <span className="px-1.5">{workoutSet.reps}</span>
      <IconButton
        onClick={() =>
          mutate({
            field: "reps",
            id: workoutSet.id,
            value: workoutSet.reps + 1,
          })
        }
        type="plus"
      />
      x <span>{workoutSet.weight}</span>
      kg
    </div>
  );
}
