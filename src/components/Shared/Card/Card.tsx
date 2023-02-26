import type { Workout } from "@prisma/client";
import Link from "next/link";
import { formatDate } from "../../../utils/date";
import RemoveButton from "../buttons/RemoveButton";

type Props = {
  workout: Workout;
  onRemove: (id: Workout["id"]) => void;
  isRemoving: boolean;
};

export default function Card({
  workout: { summary, id, when },
  onRemove,
  isRemoving,
}: Props) {
  return (
    <div className="mb-2 flex justify-between border-b text-white">
      <div>
        <Link href={`/workouts/${id}`}>
          Summary: <span className="font-bold">{summary}</span>
        </Link>

        <div className="text-white-bold">
          When: <span className="font-bold">{formatDate(when)}</span>
        </div>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn-sm btn m-1 bg-slate-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box bg-slate-500 p-2 shadow"
        >
          <div onClick={() => onRemove(id)} className="flex gap-2">
            <span className="font-bold">Remove</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </ul>
      </div>
    </div>
  );
}
