import { PropsWithChildren } from "react";

export default function NoContent(props: PropsWithChildren) {
  return <div className="text-white">{props.children}</div>;
}
