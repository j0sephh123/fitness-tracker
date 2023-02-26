import { useState } from "react";
import { api } from "../../utils/api";
import ConfirmButton from "./ConfirmButton";
import { setDialogOpen, setNotification } from "../../store";
import { messages } from "../../utils/constants";
import TextField from "../form/TextField";

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
      <TextField
        fieldType="date"
        label="When"
        value={when.toString()}
        onChange={setWhen}
      />
      <TextField label="Summary" value={summary} onChange={setSummary} />
      <TextField label="Gym" value={gym} onChange={setGym} />
      <TextField
        fieldType="textarea"
        label="Description"
        value={description}
        onChange={setDescription}
      />

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
