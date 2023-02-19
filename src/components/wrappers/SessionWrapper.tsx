import { useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";
import { setSession } from "../../store";
import AccessDenied from "../Shared/AccessDenied/AccessDenied";
import Loading from "../Shared/Loading/Loading";

export default function SessionWrapper({ children }: PropsWithChildren) {
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (sessionData === undefined) {
      return;
    }

    setSession(sessionData);
  }, [sessionData]);

  if (sessionData === undefined) {
    return <Loading />;
  }

  if (sessionData === null) {
    return <AccessDenied />;
  }

  return <>{children}</>;
}
