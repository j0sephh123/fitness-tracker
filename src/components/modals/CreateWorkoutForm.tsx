import { useState } from "react";
import { api } from "../../utils/api";
import ConfirmButton from "./ConfirmButton";
import { setDialogOpen, setNotification, useStore } from "../../store";
import { messages } from "../../utils/constants";
import CloseButton from "./CloseButton";

export default function CreateWorkoutForm() {
  const [when, setWhen] = useState<Date>(new Date());
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [gym, setGym] = useState("");
  const ctx = api.useContext();

  const { mutate: createWorkout } = api.workouts.create.useMutation({
    onSuccess: () => {
      setSummary("");
      setWhen(new Date());
      setDescription("");
      setGym("");

      ctx.workouts.list.invalidate();
      setNotification(messages["notifications.workoutCreated"]);
      setDialogOpen(false);
    },
  });

  return (
    <>
      <div className="form-control my-2">
        <label className="text-white">When</label>
        <input
          className="input w-full"
          value={when.toString()}
          onChange={(e) => setWhen(new Date(e.target.value))}
          type="date"
        />
      </div>

      <div className="form-control mb-2">
        <label className="text-white">Summary</label>
        <input
          className="input w-full"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>

      <div className="form-control mb-2">
        <label className="text-white">Gym</label>
        <input
          className="input w-full"
          value={gym}
          onChange={(e) => setGym(e.target.value)}
        />
      </div>

      <div className="form-control mb-4">
        <label className="text-white">Description</label>
        <textarea
          className="textarea w-full"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <ConfirmButton
        onClick={() => {
          createWorkout({
            when,
            summary,
            description,
            gym,
          });
        }}
      />
    </>
  );
}
