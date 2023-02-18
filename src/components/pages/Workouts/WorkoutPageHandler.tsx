import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { api } from "../../../utils/api";
import WorkoutsPage from "./WorkoutsPage";

type Props = {
  accessDenied: ReactNode;
  loading: ReactNode;
  error: ReactNode;
  renderComponent: ({
    data,
  }: React.ComponentProps<typeof WorkoutsPage>) => JSX.Element;
};

// TODO can this be generic?
export default function WorkoutPageHandler({
  accessDenied,
  renderComponent,
  error,
  loading,
}: Props) {
  const { data: sessionData, status } = useSession();
  const {
    data: workouts,
    isLoading,
    isError,
  } = api.workouts.getWorkouts.useQuery(
    { userId: sessionData?.user.id as string },
    {
      enabled: !!sessionData,
    }
  );

  if (status === "loading" || isLoading) {
    return <>{loading}</>;
  }

  if (status === "unauthenticated" || !sessionData) {
    return <>{accessDenied}</>;
  }

  if (!workouts || isError) {
    return <>{error}</>;
  }

  return <>{renderComponent({ data: workouts })}</>;
}
