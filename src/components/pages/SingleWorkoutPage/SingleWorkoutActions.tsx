import { Workout } from "@prisma/client";
import Link from "next/link";
import { SingleWorkoutPageType } from "../../../types";
import EditButton from "../../Shared/buttons/EditButton";
import RemoveWorkout from "./RemoveWorkout";

export default function SingleWorkoutActions({
  type,
  id,
}: {
  type: SingleWorkoutPageType;
  id: Workout["id"];
}) {
  return (
    <div className="flex justify-end">
      {type === "view" && (
        <Link href={`/workouts/${id}/edit`}>
          <EditButton>Edit</EditButton>
        </Link>
      )}
      {type === "edit" && <RemoveWorkout id={id} />}
    </div>
  );
}
