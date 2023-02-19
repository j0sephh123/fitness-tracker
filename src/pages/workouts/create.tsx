import Head from "next/head";
import { useState } from "react";
import { api } from "../../utils/api";

export default function WorkoutsCreatePageIndex() {
  const [when, setWhen] = useState("");
  const [summary, setSummary] = useState("");

  const { mutate: createWorkout } = api.workouts.create.useMutation({
    onSuccess: () => {
      setSummary("");
      setWhen("");
    },
  });

  const submit = () => {
    // TODO currently when is a string and needs to be transformed into a date for prisma
    // I think that the transformation should be done on the backend side.
    createWorkout({
      when,
      summary,
    });
  };

  return (
    <>
      <Head>
        <title>Create a Workout</title>
      </Head>
      <div className="text-white">create a workout</div>

      <div>
        <label className="text-white">When</label>
        <input
          value={when}
          onChange={(e) => setWhen(e.target.value)}
          type="date"
        />
      </div>

      <div>
        <label className="text-white">Summary</label>
        <input value={summary} onChange={(e) => setSummary(e.target.value)} />
      </div>

      <button className="border p-2 text-white" onClick={submit}>
        Submit
      </button>
    </>
  );
}
