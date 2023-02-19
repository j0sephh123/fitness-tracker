import { useSession } from "next-auth/react";

export default function useAuthSession() {
  const { data: sessionData, status: authStatus } = useSession();

  return {
    sessionData,
    authStatus,
  };
}
