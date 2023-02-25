import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import Loading from "../../Shared/Loading/Loading";
import useWorkoutsLoad from "../../../hooks/useWorkoutsLoad";
import WorkoutsPage from "./WorkoutsPage";
import NoContent from "../../Shared/NoContent/NoContent";
import Link from "next/link";

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
      <Link className="text-white" href="/workouts/create">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute bottom-5 right-5 h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>
      {workouts.length > 0 ? (
        <WorkoutsPage workouts={workouts} />
      ) : (
        <NoContent>No workouts found</NoContent>
      )}
    </>
  );
}
