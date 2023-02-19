import { proxy, useSnapshot } from "valtio";
import type { Session } from "next-auth";

type Store = {
  session: Session | null | undefined;
};

export const store = proxy<Store>({
  session: undefined,
});

export const setSession = (session: Store["session"]) => {
  store.session = session;
};

export const useStore = () => useSnapshot(store);
