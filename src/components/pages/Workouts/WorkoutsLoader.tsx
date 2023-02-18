import { Workout } from "@prisma/client";
import { api } from "../../../utils/api";

export default function WorkoutsLoader({
  userId,
  renderWithData,
}: {
  userId: string;
  renderWithData: ({ data }: { data: Workout[] }) => JSX.Element;
}) {
  const { data: workouts } = api.example.getWorkouts.useQuery({ userId });

  if (!workouts) {
    return null;
  }

  return <>{renderWithData({ data: workouts })}</>;
}
