import { type NextPage } from "next";
import { signIn, signOut } from "next-auth/react";
import { useStore } from "../store";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { session } = useStore();

  return (
    <div
      data-testid="authSection"
      className="flex flex-col items-center justify-center gap-4"
    >
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={session ? () => void signOut() : () => void signIn()}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
