import { ReactNode } from "react";
import useWorkoutsLoad from "./useWorkoutsLoad";
import WorkoutsPage from "./WorkoutsPage";

type Props = {
  loading: ReactNode;
  error: ReactNode;
  renderComponent: (
    props: React.ComponentProps<typeof WorkoutsPage>
  ) => JSX.Element;
};

// TODO can this be generic?
export default function WorkoutPageHandler({
  renderComponent,
  error,
  loading,
}: Props) {
  const { isLoading, isError, workouts } = useWorkoutsLoad();

  if (isLoading) {
    return <>{loading}</>;
  }

  if (!workouts || isError) {
    return <>{error}</>;
  }

  return <>{renderComponent({ workouts })}</>;
}
