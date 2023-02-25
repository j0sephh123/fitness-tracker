import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import Loading from "../../Shared/Loading/Loading";
import useWorkoutsLoad from "../../../hooks/useWorkoutsLoad";
import WorkoutsPage from "./WorkoutsPage";
import NoContent from "../../Shared/NoContent/NoContent";
import WorkoutCreateButton from "./WorkoutCreateButton";

export default function WorkoutPageHandler() {
  const { isLoading, isError, workouts } = useWorkoutsLoad();

  if (isLoading) {
    return <Loading />;
  }

  if (!workouts || isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <WorkoutCreateButton />
      {workouts.length > 0 ? (
        <WorkoutsPage workouts={workouts} />
      ) : (
        <NoContent>No workouts found</NoContent>
      )}
    </>
  );
}
