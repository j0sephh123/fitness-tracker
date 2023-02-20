import { PropsWithChildren, useEffect } from "react";
import { setNotification, useStore } from "../../store";

const timeout = 2000;

export default function Notification({ children }: PropsWithChildren) {
  const { notification } = useStore();

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification(null);
      }, timeout);
    }
  }, [notification]);

  return (
    <>
      {children}
      {notification && <div className="text-white">{notification}</div>}
    </>
  );
}
