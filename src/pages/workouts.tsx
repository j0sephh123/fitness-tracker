import AccessDenied from "../components/AccessDenied/AccessDenied";
import Loading from "../components/Loading/Loading";
import PageHandler from "../components/pages/PageHandler";
import WorkoutsLoader from "../components/pages/Workouts/WorkoutsLoader";
import WorkoutsPage from "../components/pages/Workouts/WorkoutsPage";

export default function WorkoutsPageIndex() {
  return (
    <PageHandler
      accessDenied={<AccessDenied />}
      loading={<Loading />}
      renderContent={(userId: string) => (
        <WorkoutsLoader
          userId={userId}
          renderWithData={(props) => <WorkoutsPage {...props} />}
        />
      )}
    />
  );
}
