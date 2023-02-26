import { useState } from "react";
import { api } from "../../utils/api";
import ConfirmButton from "./ConfirmButton";
import { setDialogOpen } from "../../store";
import TextField from "../form/TextField";

export default function CreateExerciseForm() {
  const [title, setTitle] = useState("");
  const [exrx, setExrx] = useState("");

  const { mutate: createExercise } = api.exercises.create.useMutation({
    onSuccess: () => {
      setTitle("");
      setExrx("");

      setDialogOpen(false);
    },
  });

  return (
    <>
      <TextField label="Title" value={title} onChange={setTitle} />
      <TextField label="Exrx" value={exrx} onChange={setExrx} />

      <ConfirmButton
        onClick={() => {
          createExercise({
            title,
            exrx,
          });
        }}
      />
    </>
  );
}
