import { setNotification } from "../store";
import { api } from "../utils/api";
import { messages } from "../utils/constants";
import useNavigate from "./useNavigate";

export default function useRemoveWorkout() {
  const navigate = useNavigate("/workouts");
  const { mutate: removeWorkout, isLoading: isRemoving } =
    api.workouts.remove.useMutation({
      onSuccess: () => {
        navigate();
        setNotification(messages["notifications.workoutRemoved"]);
      },
    });

  return { isRemoving, removeWorkout };
}
