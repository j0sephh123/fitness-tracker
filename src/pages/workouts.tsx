import AccessDenied from "../components/Shared/AccessDenied/AccessDenied";
import Loading from "../components/Shared/Loading/Loading";
import WorkoutPageHandler from "../components/pages/Workouts/WorkoutPageHandler";
import ErrorMessage from "../components/Shared/ErrorMessage/ErrorMessage";
import WorkoutsPage from "../components/pages/Workouts/WorkoutsPage";

export default function WorkoutsPageIndex() {
  return (
    <WorkoutPageHandler
      error={<ErrorMessage />}
      accessDenied={<AccessDenied />}
      loading={<Loading />}
      renderComponent={WorkoutsPage}
    />
  );
}
