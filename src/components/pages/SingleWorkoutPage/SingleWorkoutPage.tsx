import type { Workout } from "@prisma/client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useNavigate from "../../../hooks/useNavigate";
import { setNotification } from "../../../store";
import { api } from "../../../utils/api";
import { messages } from "../../../utils/constants";
import EditButton from "../../Shared/buttons/EditButton";
import RemoveButton from "../../Shared/buttons/RemoveButton";

export type SingleWorkoutPageType = "edit" | "view";

type Props = {
  workout: Workout;
  type: SingleWorkoutPageType;
  refetch: any;
};

export default function SingleWorkoutPage({ workout, type, refetch }: Props) {
  const [summaryValue, setSummaryValue] = useState(workout.summary);
  const debouncedSummary = useDebounce(summaryValue);

  const navigate = useNavigate("/workouts");
  const { mutate: removeWorkout, isLoading: isRemoving } =
    api.workouts.remove.useMutation({
      onSuccess: () => {
        navigate();
        setNotification(messages["notifications.workoutRemoved"]);
      },
    });

  const {
    mutate: updateSummary,
    isSuccess,
    reset,
  } = api.workouts.updateSummary.useMutation({
    onSuccess: () => {
      refetch();
      setTimeout(() => {
        reset();
      }, 500);
    },
  });

  const handleRemove = () => {
    removeWorkout(workout.id);
  };

  useEffect(() => {
    if (debouncedSummary === workout.summary) return;
    updateSummary({
      id: workout.id,
      summary: debouncedSummary,
    });
  }, [debouncedSummary]);

  return (
    <div className="text-white">
      <div className="flex justify-end">
        {type === "view" && (
          <Link href={`/workouts/${workout.id}/edit`}>
            <EditButton>Edit</EditButton>
          </Link>
        )}
        {type === "edit" && (
          <RemoveButton isLoading={isRemoving} onClick={handleRemove}>
            Remove Workout
          </RemoveButton>
        )}
      </div>
      <input
        onChange={(e) => setSummaryValue(e.target.value)}
        disabled={type === "view"}
        className={clsx(
          "bg-transparent",
          "text-3xl",
          "text-white",
          "outline-0",
          "border",
          "border-transparent",
          "focus:border-b-white",
          isSuccess && ["focus:border-b-green-600", "border-b-green-600"]
        )}
        value={summaryValue}
      />
    </div>
  );
}
