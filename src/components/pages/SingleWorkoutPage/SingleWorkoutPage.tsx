import type { Workout } from "@prisma/client";
import clsx from "clsx";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import useDebounce from "../../../hooks/useDebounce";
import { api } from "../../../utils/api";
import { formatDate } from "../../../utils/date";
import WorkoutSets from "../../WorkoutSets";

export type SingleWorkoutPageType = "edit" | "view";

type Props = {
  workout: Workout;
  type: SingleWorkoutPageType;
  refetch: any;
};

export default function SingleWorkoutPage({ workout, type, refetch }: Props) {
  const [summaryValue, setSummaryValue] = useState(workout.summary);
  const debouncedSummary = useDebounce(summaryValue);
  const [shouldShowCalendar, setShouldShowCalendar] = useState(false);

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

  const { mutate: updateWhen } = api.workouts.updateWhen.useMutation({
    onSuccess: () => {
      setShouldShowCalendar(false);
      refetch();
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
    <div>
      <div className={clsx("relative")}>
        {shouldShowCalendar && (
          <Calendar
            onChange={(newWhen: any) =>
              updateWhen({
                id: workout.id,
                when: newWhen,
              })
            }
            value={workout.when}
          />
        )}
        <div
          onClick={() =>
            type === "edit" && setShouldShowCalendar(!shouldShowCalendar)
          }
          className="cursor-pointer text-2xl text-white"
        >
          {formatDate(workout.when)}
        </div>
      </div>
      <input
        onChange={(e) => setSummaryValue(e.target.value)}
        disabled={type === "view"}
        className={clsx(
          "w-screen",
          "bg-transparent",
          "text-3xl",
          "text-white",
          "outline-0",
          "border",
          "border-transparent",
          !isSuccess && "focus:border-b-white",
          isSuccess && ["focus:border-b-green-600", "border-b-green-600"]
        )}
        value={summaryValue}
      />
      <p className="text-white">{workout.description}</p>
      <WorkoutSets workoutId={workout.id} />
    </div>
  );
}
