import { proxy, useSnapshot } from "valtio";
import type { Session } from "next-auth";

type Store = {
  session: Session | null | undefined;
  notification: string | null;
};

export const store = proxy<Store>({
  session: undefined,
  notification: null,
});

export const setSession = (session: Store["session"]) => {
  store.session = session;
};

// TODO this should be refactored at some point
// When additional props need to passed such as color, it would be better to
// pass a union member to be used as an object key to access different props
// instead of a hard coded string.
export const setNotification = (notification: Store["notification"]) => {
  store.notification = notification;
};

export const useStore = () => useSnapshot(store);
