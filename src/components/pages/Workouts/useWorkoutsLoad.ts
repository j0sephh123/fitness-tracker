import { useSession } from "next-auth/react";
import { api } from "../../../utils/api";

export default function useWorkoutsLoad() {
  const { data: sessionData, status: authStatus } = useSession();
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
