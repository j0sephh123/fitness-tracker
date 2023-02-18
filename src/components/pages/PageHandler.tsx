import { useSession } from "next-auth/react";

export default function PageHandler(props: {
  accessDenied: any;
  loading: any;
  renderContent: any;
}) {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return props.loading;
  }

  if (status === "unauthenticated" || !sessionData) {
    return props.accessDenied;
  }

  return <>{props.renderContent(sessionData.user.id)}</>;
}
