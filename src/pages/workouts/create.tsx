/*eslint-disable*/
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { setNotification } from "../../store";
import { api } from "../../utils/api";
import { messages } from "../../utils/constants";

export default function WorkoutsCreatePageIndex() {
  const router = useRouter();
  const [when, setWhen] = useState("");
  const [summary, setSummary] = useState("");

  const { mutate: createWorkout } = api.workouts.create.useMutation({
    onSuccess: () => {
      setSummary("");
      setWhen("");

      setNotification(messages["notifications.workoutCreated"]);

      router.push("/workouts");
    },
  });

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

      <button
        className="border p-2 text-white"
        onClick={() => {
          createWorkout({
            when,
            summary,
          });
        }}
      >
        Submit
      </button>
    </>
  );
}
