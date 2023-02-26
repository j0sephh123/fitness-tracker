import { useState } from "react";
import { setDialogOpen, useStore } from "../../store";
import CloseButton from "./CloseButton";
import CreateExerciseForm from "./CreateExerciseForm";
import CreateWorkoutForm from "./CreateWorkoutForm";
import ModalWrapper from "./ModalWrapper";
import Tabs, { CreateType } from "./Tabs";

export default function CreateModal() {
  const { isDialogOpen } = useStore();
  const [createType, setCreateType] = useState<CreateType>("workout");

  return (
    <ModalWrapper isOpen={isDialogOpen}>
      <CloseButton onClick={() => setDialogOpen(false)} />
      <Tabs createType={createType} onClick={setCreateType} />

      {createType === "workout" && <CreateWorkoutForm />}
      {createType === "exercise" && <CreateExerciseForm />}
      {createType === "gym" && <div>Gym</div>}
    </ModalWrapper>
  );
}
