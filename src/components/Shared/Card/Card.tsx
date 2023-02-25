import type { Workout } from "@prisma/client";
import Link from "next/link";
import { formatDate } from "../../../utils/date";
import RemoveButton from "../buttons/RemoveButton";

type Props = {
  workout: Workout;
  onRemove: (id: Workout["id"]) => void;
  isRemoving: boolean;
};

export default function Card({
  workout: { summary, id, when },
  onRemove,
  isRemoving,
}: Props) {
  return (
    <div className="text-white">
      <Link href={`/workouts/${id}`}>{summary}</Link>
      <div className="text-white">{formatDate(when)}</div>
      <RemoveButton isLoading={isRemoving} onClick={() => onRemove(id)}>
        Remove
      </RemoveButton>
    </div>
  );
}
