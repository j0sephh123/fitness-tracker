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
    <div className="mb-2 border-b text-white">
      <Link href={`/workouts/${id}`}>
        Summary: <span className="font-bold">{summary}</span>
      </Link>

      <div className="text-white-bold">
        When: <span className="font-bold">{formatDate(when)}</span>
      </div>

      <RemoveButton isLoading={isRemoving} onClick={() => onRemove(id)}>
        Remove
      </RemoveButton>
    </div>
  );
}
