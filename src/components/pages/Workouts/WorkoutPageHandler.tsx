import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import Loading from "../../Shared/Loading/Loading";
import useWorkoutsLoad from "../../../hooks/useWorkoutsLoad";
import WorkoutsPage from "./WorkoutsPage";
import NoContent from "../../Shared/NoContent/NoContent";

// TODO can this be generic?
export default function WorkoutPageHandler() {
  const { isLoading, isError, workouts } = useWorkoutsLoad();

  if (isLoading) {
    return <Loading />;
  }

  if (!workouts || isError) {
    return <ErrorMessage />;
  }

  if (workouts.length===0) {
    return <NoContent>No workouts found</NoContent>;
  }

  return <WorkoutsPage workouts={workouts} />;
}
