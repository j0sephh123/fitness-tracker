import { useStore } from "../store";
import { api } from "../utils/api";

export default function useExercisesLoad() {
  const { session } = useStore();

  const {
    data: exercises,
    isLoading,
    isError,
  } = api.exercises.list.useQuery(
    { userId: session?.user.id as string },
    {
      enabled: !!session,
    }
  );

  return { isLoading, isError, exercises };
}
