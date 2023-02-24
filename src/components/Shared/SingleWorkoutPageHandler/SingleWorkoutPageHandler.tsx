import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useNavigate from "../../../hooks/useNavigate";
import { setNotification } from "../../../store";
import { api } from "../../../utils/api";
import { messages } from "../../../utils/constants";
import SingleWorkoutPage from "../../pages/SingleWorkoutPage/SingleWorkoutPage";
import EditButton from "../buttons/EditButton";
import RemoveButton from "../buttons/RemoveButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

export type Props = {
  type: "edit" | "view";
};

export default function SingleWorkoutPageHandler({ type }: Props) {
  const { query } = useRouter();

  const {
    data: workout,
    isLoading,
    isError,
    refetch,
  } = api.workouts.single.useQuery({
    id: query.id as string,
  });

  const navigate = useNavigate("/workouts");
  const { mutate: removeWorkout, isLoading: isRemoving } =
    api.workouts.remove.useMutation({
      onSuccess: () => {
        navigate();
        setNotification(messages["notifications.workoutRemoved"]);
      },
    });

  if (isLoading) {
    return <Loading />;
  }

  if (!workout || isError) {
    return <ErrorMessage />;
  }

  const handleRemove = () => {
    removeWorkout(workout.id);
  };

  return (
    <>
      <Head>
        <title>
          {type} {workout.summary}
        </title>
      </Head>
      <div>
        {type === "edit" && (
          <Link className="text-white" href={`/workouts/${workout.id}`}>
            Back to workout
          </Link>
        )}
        <div className="flex justify-end">
          {type === "view" && (
            <Link href={`/workouts/${workout.id}/edit`}>
              <EditButton>Edit</EditButton>
            </Link>
          )}
          {type === "edit" && (
            <RemoveButton isLoading={isRemoving} onClick={handleRemove}>
              Remove Workout
            </RemoveButton>
          )}
        </div>
        <SingleWorkoutPage refetch={refetch} workout={workout} type={type} />
      </div>
    </>
  );
}
