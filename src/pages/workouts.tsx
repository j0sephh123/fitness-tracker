import AccessDenied from "../components/Shared/AccessDenied/AccessDenied";
import Loading from "../components/Shared/Loading/Loading";
import WorkoutPageHandler from "../components/pages/Workouts/WorkoutPageHandler";
import ErrorMessage from "../components/Shared/ErrorMessage/ErrorMessage";
import WorkoutsPage from "../components/pages/Workouts/WorkoutsPage";
import Head from "next/head";

// TODO maybe I should use a hook here instead of that?
// Get error, accessDenied, loading. If any of them is true -> render the component
// at the end return the desired component.
// I just really wanted to have a way to not have to do that, but currently I'm failing to achieve that.
export default function WorkoutsPageIndex() {
  return (
    <>
      <Head>
        <title>Workouts</title>
      </Head>
      <WorkoutPageHandler
        error={<ErrorMessage />}
        accessDenied={<AccessDenied />}
        loading={<Loading />}
        renderComponent={WorkoutsPage}
      />
    </>
  );
}
