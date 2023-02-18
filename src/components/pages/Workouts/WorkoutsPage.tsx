import { Workout } from "@prisma/client";

type Props = {
  data: Workout[];
};

export default function WorkoutsPage({ data }: Props) {
  console.log(data);

  return (
    <div>
      {data.map((workout) => (
        <div key={workout.summary}>{workout.summary}</div>
      ))}
    </div>
  );
}
