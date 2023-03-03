import { Exercise, WorkoutSet } from "@prisma/client";
import IconButton from "../Shared/buttons/IconButton";

type Props = {
  workoutSet: WorkoutSet & {
    exercise: Exercise;
  };
  update: (arg: any) => void;
  onDuplicate: () => void;
  onRemove: () => void;
};

const calc = (shouldIncrement = true, num1: number, step = 1) => {
  if (shouldIncrement) {
    return num1 + step;
  }

  return num1 - step;
};

export default function SingleWorkoutSet({
  workoutSet,
  update,
  onDuplicate,
  onRemove,
}: Props) {
  const handleRepClick = (shouldIncrement = true) => {
    update({
      field: "reps",
      id: workoutSet.id,
      value: calc(shouldIncrement, workoutSet.reps),
    });
  };

  const handleWeightClick = (shouldIncrement = true) => {
    update({
      field: "weight",
      id: workoutSet.id,
      value: calc(shouldIncrement, workoutSet.weight, 2.5),
    });
  };

  return (
    <div
      className="flex justify-between border-b-2 text-white"
      key={workoutSet.id}
    >
      <div>
        <span>{workoutSet.exercise.title}</span>
        <IconButton type="minus" onClick={() => handleRepClick(false)} />
        <span className="px-1.5">{workoutSet.reps}</span>
        <IconButton onClick={handleRepClick} type="plus" />
        x
        <IconButton type="minus" onClick={() => handleWeightClick(false)} />
        <span className="mx-2 inline-block w-8 text-center">
          {workoutSet.weight}
        </span>
        <IconButton type="plus" onClick={handleWeightClick} />
        kg
      </div>
      <button onClick={onDuplicate} className="btn-outline btn-info btn-sm btn">
        Duplicate
      </button>
      <button onClick={onRemove} className="btn-outline btn-error btn-sm btn">
        Remove set
      </button>
    </div>
  );
}
