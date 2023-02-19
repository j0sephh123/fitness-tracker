import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import Loading from "../../Shared/Loading/Loading";
import useWorkoutsLoad from "./useWorkoutsLoad";
import WorkoutsPage from "./WorkoutsPage";

// TODO can this be generic?
export default function WorkoutPageHandler() {
  const { isLoading, isError, workouts } = useWorkoutsLoad();

  if (isLoading) {
    return <Loading />;
  }

  if (!workouts || isError) {
    return <ErrorMessage />;
  }

  return <WorkoutsPage workouts={workouts} />;
}
