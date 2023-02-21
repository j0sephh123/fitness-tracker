import type { Workout } from "@prisma/client";
import Link from "next/link";
import RemoveButton from "../../Shared/buttons/RemoveButton";

type Props = {
  summary: Workout["summary"];
  id: Workout["id"];
  onRemove: (id: Workout["id"]) => void;
  isRemoving: boolean;
};

export default function WorkoutCard({
  summary,
  onRemove,
  id,
  isRemoving,
}: Props) {
  return (
    <div className="text-white">
      <Link href={`/workouts/${id}`}>{summary}</Link>
      <RemoveButton isLoading={isRemoving} onClick={() => onRemove(id)}>
        Remove
      </RemoveButton>
    </div>
  );
}
