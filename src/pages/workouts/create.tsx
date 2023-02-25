import Head from "next/head";
import { useState } from "react";
import useNavigate from "../../hooks/useNavigate";
import { setNotification } from "../../store";
import { api } from "../../utils/api";
import { messages } from "../../utils/constants";

export default function WorkoutsCreatePageIndex() {
  const navigate = useNavigate("/workouts");
  const [when, setWhen] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  const { mutate: createWorkout } = api.workouts.create.useMutation({
    onSuccess: () => {
      setSummary("");
      setWhen("");
      setDescription("");

      setNotification(messages["notifications.workoutCreated"]);

      navigate();
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

      <div>
        <label className="text-white">Description</label>
        <textarea
          
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        className="border p-2 text-white"
        onClick={() => {
          createWorkout({
            when,
            summary,
            description,
          });
        }}
      >
        Submit
      </button>
    </>
  );
}
