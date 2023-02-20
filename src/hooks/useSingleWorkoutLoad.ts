import { useStore } from "../store";
import { api } from "../utils/api";

export default function useSingleWorkoutLoad() {
  const { session } = useStore();

  const {
    data: workouts,
    isLoading,
    isError,
  } = api.workouts.list.useQuery(
    { userId: session?.user.id as string },
    {
      enabled: !!session,
    }
  );

  return { isLoading, isError, workouts };
}
