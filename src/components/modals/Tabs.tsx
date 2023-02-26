import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export type CreateType = "workout" | "exercise" | "gym";

const createTypes: { type: CreateType; label: string }[] = [
  {
    label: "Workout",
    type: "workout",
  },
  {
    label: "Exercise",
    type: "exercise",
  },
  {
    label: "Gym",
    type: "gym",
  },
];

type Props = {
  onClick: Dispatch<SetStateAction<CreateType>>;
  createType: CreateType;
};

export default function Tabs({ onClick, createType }: Props) {
  return (
    <div className="tabs tabs-boxed bg-inherit">
      {createTypes.map(({ label, type }) => (
        <a
          onClick={() => onClick(type)}
          className={clsx("tab", createType === type && "tab-active")}
          key={type}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
