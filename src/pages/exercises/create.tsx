import Head from "next/head";
import { useState } from "react";
import useNavigate from "../../hooks/useNavigate";
import { setNotification } from "../../store";
import { api } from "../../utils/api";
import { messages } from "../../utils/constants";

export default function ExercisesCreateIndex() {
  const navigate = useNavigate("/exercises");
  const [title, setTitle] = useState("");
  const [exrx, setExrx] = useState("");

  const { mutate: createWorkout } = api.exercises.create.useMutation({
    onSuccess: () => {
      setTitle("");
      setExrx("");

      setNotification(messages["notifications.exerciseCreated"]);

      navigate();
    },
  });

  return (
    <>
      <Head>
        <title>Create an Exercises</title>
      </Head>
      <div>
        <label className="text-white">title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label className="text-white">exrx</label>
        <input value={exrx} onChange={(e) => setExrx(e.target.value)} />
      </div>

      <button
        className="border p-2 text-white"
        onClick={() => {
          createWorkout({
            title,
            exrx,
          });
        }}
      >
        Submit
      </button>
    </>
  );
}
