import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ProtectedPage() {
  const { data, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return <div>Protected page</div>;
}
