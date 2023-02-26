import type { Workout } from "@prisma/client";
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

  const handleRemove = (id: Workout["id"]) => {
    removeWorkout(id);
  };

  return (
    <div>
      {workouts.map((workout) => (
        <Card key={workout.id} workout={workout} onRemove={handleRemove} />
      ))}
    </div>
  );
}
