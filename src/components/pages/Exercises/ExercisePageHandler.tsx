import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import Loading from "../../Shared/Loading/Loading";
import useExercisesLoad from "../../../hooks/useExercisesLoad";
import NoContent from "../../Shared/NoContent/NoContent";
import clsx from "clsx";
import Link from "next/link";

export default function ExercisePageHandler() {
  const { isLoading, isError, exercises } = useExercisesLoad();

  if (isLoading) {
    return <Loading />;
  }

  if (!exercises || isError) {
    return <ErrorMessage />;
  }

  if (exercises.length === 0) {
    return <NoContent>No exercises found</NoContent>;
  }

  return (
    <div>
      <div className="text-white">Number of exercises: {exercises.length}</div>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <Link
            href={`/exercises/${exercise.id}`}
            className={clsx("text-white")}
          >
            {exercise.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
