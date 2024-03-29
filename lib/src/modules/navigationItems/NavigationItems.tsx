import React from "react";
import { NavigationProvider } from "./NavigationProvider";

export function NavigationItems({
  children,
  onNav,
  defaultTabId,
  srLabel,
}: any) {
  return (
    <NavigationProvider onNav={onNav} defaultTabId={defaultTabId}>
      <nav className="gui-navigation--items" aria-label={srLabel}>
        <ul role="menubar" aria-label={srLabel}>
          {children}
        </ul>
      </nav>
    </NavigationProvider>
  );
}

NavigationItems.defaultProps = {
  onNav: () => {},
};
