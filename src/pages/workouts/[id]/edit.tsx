import Link from "next/link";
import { useRouter } from "next/router";
import ErrorMessage from "../../../components/Shared/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Shared/Loading/Loading";
import { api } from "../../../utils/api";

// TODO still can't find a good way to extract this logic...
export default function SingleWorkoutEditPage() {
  const { query } = useRouter();

  const {
    data: workout,
    isLoading,
    isError,
  } = api.workouts.single.useQuery({
    id: query.id as string,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!workout || isError) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <Link className="text-white" href={`/workouts/${workout.id}`}>
        Back to workout
      </Link>
      <h1 className="text-white">SingleWorkoutEditPage for {workout.summary}</h1>
    </div>
  );
}
