
import { useStore } from "../../../store";
import { api } from "../../../utils/api";

export default function useWorkoutsLoad() {
  const { session } = useStore();

  const {
    data: workouts,
    isLoading,
    isError,
  } = api.workouts.getWorkouts.useQuery(
    { userId: session?.user.id as string },
    {
      enabled: !!session,
    }
  );

  return { isLoading, isError, workouts };
}
