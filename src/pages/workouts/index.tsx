import Loading from "../../components/Shared/Loading/Loading";
import WorkoutPageHandler from "../../components/pages/Workouts/WorkoutPageHandler";
import ErrorMessage from "../../components/Shared/ErrorMessage/ErrorMessage";
import WorkoutsPage from "../../components/pages/Workouts/WorkoutsPage";
import Head from "next/head";

export default function WorkoutsPageIndex() {
  return (
    <>
      <Head>
        <title>Workouts</title>
      </Head>
      <WorkoutPageHandler
        error={<ErrorMessage />}
        loading={<Loading />}
        renderComponent={WorkoutsPage}
      />
    </>
  );
}
