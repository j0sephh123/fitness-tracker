import useAuthSession from "../../../hooks/useAuthSession";
import { api } from "../../../utils/api";

export default function useWorkoutsLoad() {
  const { authStatus, sessionData } = useAuthSession();

  const {
    data: workouts,
    isLoading,
    isError,
  } = api.workouts.getWorkouts.useQuery(
    { userId: sessionData?.user.id as string },
    {
      enabled: !!sessionData,
    }
  );

  return { isLoading, isError, workouts, authStatus };
}
