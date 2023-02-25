import { useRouter } from "next/router";
import { api } from "../utils/api";

export default function useGetSingleExercise() {
  const { query } = useRouter();

  const {
    data: exercise,
    isLoading,
    isError,
    refetch,
  } = api.exercises.single.useQuery({
    id: query.id as string,
  });

  return {
    exercise,
    isLoading,
    isError,
    refetchWorkout: refetch,
  };
}
