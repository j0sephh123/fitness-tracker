import { ReactNode } from "react";
import useWorkoutsLoad from "./useWorkoutsLoad";
import WorkoutsPage from "./WorkoutsPage";

type Props = {
  accessDenied: ReactNode;
  loading: ReactNode;
  error: ReactNode;
  renderComponent: (props: React.ComponentProps<typeof WorkoutsPage>) => JSX.Element;
};

// TODO can this be generic?
export default function WorkoutPageHandler({
  accessDenied,
  renderComponent,
  error,
  loading,
}: Props) {
  const { isLoading, isError, workouts, authStatus } = useWorkoutsLoad();

  if (authStatus === "loading" || isLoading) {
    return <>{loading}</>;
  }

  if (authStatus === "unauthenticated") {
    return <>{accessDenied}</>;
  }

  if (!workouts || isError) {
    return <>{error}</>;
  }

  return <>{renderComponent({ workouts })}</>;
}
