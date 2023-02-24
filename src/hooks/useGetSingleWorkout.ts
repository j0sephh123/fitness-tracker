import { useRouter } from "next/router";
import { api } from "../utils/api";

export default function useGetSingleWorkout() {
  const { query } = useRouter();

  const {
    data: workout,
    isLoading,
    isError,
    refetch,
  } = api.workouts.single.useQuery({
    id: query.id as string,
  });

  return {
    workout,
    isLoading,
    isError,
    refetchWorkout: refetch,
  };
}
