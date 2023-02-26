import { setNotification } from "../store";
import { api } from "../utils/api";
import { messages } from "../utils/constants";

export default function useRemoveWorkout() {
  const { mutate: removeWorkout, isLoading: isRemoving } =
    api.workouts.remove.useMutation({
      onSuccess: () => {
        setNotification(messages["notifications.workoutRemoved"]);
      },
    });

  return { isRemoving, removeWorkout };
}
