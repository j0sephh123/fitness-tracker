import Head from "next/head";
import { useRouter } from "next/router";
import SingleWorkoutPage from "../../components/pages/SingleWorkoutPage/SingleWorkoutPage";
import ErrorMessage from "../../components/Shared/ErrorMessage/ErrorMessage";
import Loading from "../../components/Shared/Loading/Loading";
import { api } from "../../utils/api";
import { parseDateForTitle } from "../../utils/date";

export default function SingleWorkoutPageIndex() {
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

  console.log(workout.when.getTime());

  return (
    <>
      <Head>
        <title>{parseDateForTitle(workout.when)}</title>
      </Head>
      <SingleWorkoutPage workout={workout} />
    </>
  );
}
