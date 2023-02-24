import { Workout } from "@prisma/client";
import useRemoveWorkout from "../../../hooks/useRemoveWorkout";
import RemoveButton from "../../Shared/buttons/RemoveButton";

export default function RemoveWorkout({ id }: { id: Workout["id"] }) {
  const { isRemoving, removeWorkout } = useRemoveWorkout();

  return (
    <RemoveButton isLoading={isRemoving} onClick={() => removeWorkout(id)}>
      Remove Workout
    </RemoveButton>
  );
}
