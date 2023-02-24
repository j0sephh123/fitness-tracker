import { PropsWithChildren } from "react";

export default function EditButton({ children }: PropsWithChildren) {
  return <button className="border bg-green-600">{children}</button>;
}
