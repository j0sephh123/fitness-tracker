import useGetSingleWorkout from "../../../hooks/useGetSingleWorkout";
import GoBack from "../../pages/SingleWorkoutPage/GoBack";
import SingleWorkoutActions from "../../pages/SingleWorkoutPage/SingleWorkoutActions";
import SingleWorkoutPage, {
  SingleWorkoutPageType,
} from "../../pages/SingleWorkoutPage/SingleWorkoutPage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import HeadTitle from "../HeadTitle/HeadTitle";
import Loading from "../Loading/Loading";

type Props = {
  type: SingleWorkoutPageType;
};

export default function SingleWorkoutPageHandler({ type }: Props) {
  const { isLoading, workout, isError, refetchWorkout } = useGetSingleWorkout();

  if (isLoading) {
    return <Loading />;
  }

  if (!workout || isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <HeadTitle>
        {type} {workout.summary}
      </HeadTitle>
      {type === "edit" && <GoBack id={workout.id} />}
      <SingleWorkoutActions type={type} id={workout.id} />
      <SingleWorkoutPage
        refetch={refetchWorkout}
        workout={workout}
        type={type}
      />
    </>
  );
}
