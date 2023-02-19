import { Workout } from "@prisma/client";

import { api } from "../../../utils/api";

type Props = {
  workouts: Workout[];
};

export default function WorkoutsPage({ workouts }: Props) {
  const context = api.useContext();

  const { mutate: removeWorkout } = api.workouts.remove.useMutation({
    onSuccess: () => context.workouts.list.invalidate(),
  });

  return (
    <div>
      {workouts.map((workout) => (
        <div className="text-white" key={workout.summary}>
          {workout.summary}
          <button
            onClick={() => removeWorkout(workout.id)}
            className="border bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
