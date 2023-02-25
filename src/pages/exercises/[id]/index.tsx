import ErrorMessage from "../../../components/Shared/ErrorMessage/ErrorMessage";
import HeadTitle from "../../../components/Shared/HeadTitle/HeadTitle";
import Loading from "../../../components/Shared/Loading/Loading";
import useGetSingleExercise from "../../../hooks/useGetSingleExercise";

export default function SingleExerciseIndex() {
  const { isLoading, exercise, isError, refetchWorkout } =
    useGetSingleExercise();

  console.log(exercise);

  if (isLoading) {
    return <Loading />;
  }

  if (!exercise || isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <HeadTitle>{exercise.title}</HeadTitle>
      <div className="text-white">{exercise.title}</div>
    </>
  );
}
