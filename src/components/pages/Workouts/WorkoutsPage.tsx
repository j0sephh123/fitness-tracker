import { Workout } from "@prisma/client";

type Props = {
  data: Workout[];
};

export default function WorkoutsPage({ data }: Props) {
  return (
    <div>
      {data.map((workout) => (
        <div className="text-white" key={workout.summary}>
          {workout.summary}
        </div>
      ))}
    </div>
  );
}
