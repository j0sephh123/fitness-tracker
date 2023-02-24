import Head from "next/head";
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
    refetch,
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
    <>
      <Head>
        <title>
          {type} {workout.summary}
        </title>
      </Head>
      <div>
        {type === "edit" && (
          <Link className="text-white" href={`/workouts/${workout.id}`}>
            Back to workout
          </Link>
        )}
        <SingleWorkoutPage refetch={refetch} workout={workout} type={type} />
      </div>
    </>
  );
}
