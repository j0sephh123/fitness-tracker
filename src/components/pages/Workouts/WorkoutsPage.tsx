import type { Workout } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import { setNotification } from "../../../store";

import { api } from "../../../utils/api";
import { messages } from "../../../utils/constants";
import Card from "../../Shared/Card/Card";

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
      <Link className="text-white" href="/workouts/create">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10 absolute bottom-5 right-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>
      {workouts.map((workout) => (
        <Card
          key={workout.id}
          workout={workout}
          onRemove={handleRemove}
          isRemoving={currentlyRemovingId === workout.id && isRemoving}
        />
      ))}
    </div>
  );
}
