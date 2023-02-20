import { Workout } from "@prisma/client";
import { useState } from "react";

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
      {summary}
      <button onClick={() => onRemove(id)} className="border bg-red-600">
        Remove
        {isRemoving ? "Removing..." : "Remove"}
      </button>
    </div>
  );
}
