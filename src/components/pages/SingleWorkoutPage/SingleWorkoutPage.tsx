import type { Workout } from "@prisma/client";
import useNavigate from "../../../hooks/useNavigate";
import { setNotification } from "../../../store";
import { api } from "../../../utils/api";
import { messages } from "../../../utils/constants";
import RemoveButton from "../../Shared/buttons/RemoveButton";

type Props = {
  workout: Workout;
};

export default function SingleWorkoutPage({ workout }: Props) {
  const navigate = useNavigate("/workouts");
  const { mutate: removeWorkout, isLoading: isRemoving } =
    api.workouts.remove.useMutation({
      onSuccess: () => {
        navigate();
        setNotification(messages["notifications.workoutRemoved"]);
      },
    });

  const handleRemove = () => {
    removeWorkout(workout.id);
  };

  return (
    <div className="text-white">
      Single Workout {workout.summary}
      <RemoveButton isLoading={isRemoving} onClick={handleRemove}>
        Remove Workout
      </RemoveButton>
    </div>
  );
}
