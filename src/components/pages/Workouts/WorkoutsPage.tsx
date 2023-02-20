import type { Workout } from "@prisma/client";
import { useState } from "react";
import { setNotification } from "../../../store";

import { api } from "../../../utils/api";
import { messages } from "../../../utils/constants";
import WorkoutCard from "./WorkoutCard";

type Props = {
  workouts: Workout[];
};

export default function WorkoutsPage({ workouts }: Props) {
  const context = api.useContext();

  const { mutate: removeWorkout, isLoading: isRemoving } =
    api.workouts.remove.useMutation({
      onSuccess: () => {
        context.workouts.list.invalidate();
        setNotification(messages["notifications.workoutRemoved"]);
      },
    });

  const [currentlyRemovingId, setCurrentlyRemovingId] = useState<
    Workout["id"] | null
  >(null);

  const handleRemove = (id: Workout["id"]) => {
    setCurrentlyRemovingId(id);
    removeWorkout(id);
  };

  return (
    <div>
      {workouts.map(({ id, summary }) => (
        <WorkoutCard
          key={id}
          summary={summary}
          id={id}
          onRemove={handleRemove}
          isRemoving={currentlyRemovingId === id && isRemoving}
        />
      ))}
    </div>
  );
}
