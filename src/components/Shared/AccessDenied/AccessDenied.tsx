import { signIn, signOut } from "next-auth/react";
import { useStore } from "../../../store";

export default function AccessDenied() {
  const { session } = useStore();

  return (
    <div>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={session ? () => void signOut() : () => void signIn()}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
