import Head from "next/head";
import WorkoutPageHandler from "../../components/pages/Workouts/WorkoutPageHandler";

export default function WorkoutsPageIndex() {
  return (
    <>
      <Head>
        <title>Workouts</title>
      </Head>
      <WorkoutPageHandler />
    </>
  );
}
