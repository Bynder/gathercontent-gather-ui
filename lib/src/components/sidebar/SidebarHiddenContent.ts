import * as React from "react";
import { SidebarSectionContext } from "./SidebarSection";

export function SidebarHiddenContent({ children }: any) {
  const { showMore }: any = React.useContext(SidebarSectionContext);

  return showMore ? children : null;
}
