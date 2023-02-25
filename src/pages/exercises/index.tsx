import Head from "next/head";
import ExercisePageHandler from "../../components/pages/Exercises/ExercisePageHandler";

export default function ExercisePageIndex() {
  return (
    <>
      <Head>
        <title>Exercises</title>
      </Head>
      <ExercisePageHandler />
    </>
  );
}
