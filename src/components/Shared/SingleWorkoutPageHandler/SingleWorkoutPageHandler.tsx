import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "../../../utils/api";
import SingleWorkoutPage from "../../pages/SingleWorkoutPage/SingleWorkoutPage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

export type Props = {
  type: "edit" | "view";
};

export default function SingleWorkoutPageHandler({ type }: Props) {
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
      <SingleWorkoutPage workout={workout} type={type} />
    </div>
  );
}
