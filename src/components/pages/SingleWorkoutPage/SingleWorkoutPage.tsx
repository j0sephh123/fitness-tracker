import type { Workout } from "@prisma/client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { api } from "../../../utils/api";

export type SingleWorkoutPageType = "edit" | "view";

type Props = {
  workout: Workout;
  type: SingleWorkoutPageType;
  refetch: any;
};

export default function SingleWorkoutPage({ workout, type, refetch }: Props) {
  const [summaryValue, setSummaryValue] = useState(workout.summary);
  const debouncedSummary = useDebounce(summaryValue);

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

  useEffect(() => {
    if (debouncedSummary !== workout.summary) {
      updateSummary({
        id: workout.id,
        summary: debouncedSummary,
      });
    }
  }, [debouncedSummary]);

  return (
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
  );
}
