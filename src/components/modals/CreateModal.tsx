import { useState } from "react";
import { setDialogOpen, setNotification, useStore } from "../../store";
import { api } from "../../utils/api";
import { messages } from "../../utils/constants";
import Tabs, { CreateType } from "./Tabs";

export default function CreateModal() {
  const { isDialogOpen } = useStore();
  const [createType, setCreateType] = useState<CreateType>("workout");

  const ctx = api.useContext();

  const [when, setWhen] = useState<Date>(new Date());
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [gym, setGym] = useState("");

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
    <div>
      <input
        type="checkbox"
        checked={isDialogOpen}
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative bg-slate-500">
          <label
            onClick={() => setDialogOpen(false)}
            htmlFor="my-modal-3"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>

          <Tabs createType={createType} onClick={setCreateType} />

          {createType === "workout" && (
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
            </>
          )}

          {createType === "exercise" && <div>Exercise</div>}
          {createType === "gym" && <div>Gym</div>}

          <button
            className="btn w-full"
            onClick={() => {
              createWorkout({
                when,
                summary,
                description,
                gym,
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
