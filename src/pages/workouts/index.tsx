import Head from "next/head";
import Loading from "../../components/Shared/Loading/Loading";
import WorkoutPageHandler from "../../components/pages/Workouts/WorkoutPageHandler";
import ErrorMessage from "../../components/Shared/ErrorMessage/ErrorMessage";

export default function WorkoutsPageIndex() {
  return (
    <>
      <Head>
        <title>Workouts</title>
      </Head>
      <WorkoutPageHandler error={<ErrorMessage />} loading={<Loading />} />
    </>
  );
}
