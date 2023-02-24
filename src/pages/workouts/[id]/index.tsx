import Head from "next/head";
import { useRouter } from "next/router";
import SingleWorkoutPage from "../../../components/pages/SingleWorkoutPage/SingleWorkoutPage";
import ErrorMessage from "../../../components/Shared/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Shared/Loading/Loading";
import { api } from "../../../utils/api";
import { parseDateForTitle } from "../../../utils/date";

// TODO still can't find a good way to extract this logic...
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

  return (
    <>
      <Head>
        <title>{parseDateForTitle(workout.when)}</title>
      </Head>
      <SingleWorkoutPage workout={workout} />
    </>
  );
}
