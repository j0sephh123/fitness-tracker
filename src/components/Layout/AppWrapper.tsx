import { PropsWithChildren, useState } from "react";
import { setDialogOpen } from "../../store";
import DrawerContent from "../Drawer/DrawerContent";
import { DrawerIcon } from "../Icons";
import Navbar from "./Navbar/Navbar";

export default function AppWrapper({ children }: PropsWithChildren) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-700">
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          checked={isDrawerOpen}
          className="drawer-toggle"
        />

        <div className="drawer-content">
          <Navbar
            onCreate={() => setDialogOpen(true)}
            toggle={
              <label onClick={() => setIsDrawerOpen(true)} className="btn">
                <DrawerIcon />
              </label>
            }
          />
          {children}
        </div>
        <DrawerContent
          overlay={
            <label
              onClick={() => setIsDrawerOpen(false)}
              className="drawer-overlay"
            ></label>
          }
          onLinkClick={() => setIsDrawerOpen(false)}
        />
      </div>
    </div>
  );
}
