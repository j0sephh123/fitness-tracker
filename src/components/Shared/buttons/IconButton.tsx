import clsx from "clsx";

type Props = {
  type: "minus" | "plus";
  onClick: () => void;
};

export default function IconButton(props: Props) {
  console.log(props);

  return (
    <button
      className={clsx("btn-square", "btn", "btn-xs")}
      onClick={props.onClick}
    >
      {props.type === "plus" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      )}
      {props.type === "minus" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      )}
    </button>
  );
}
