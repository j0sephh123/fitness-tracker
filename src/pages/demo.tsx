import { useStore } from "../store";

export default function Demo() {
  const { session } = useStore();

  console.log({
    session,
  });

  return (
    <div className="text-white">
      <p>
        session: <b>{session?.user.id}</b>
      </p>
    </div>
  );
}
