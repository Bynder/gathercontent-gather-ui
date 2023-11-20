import React, { useContext } from "react";
import cx from "classnames";
import { NavigationContext } from "./NavigationProvider";

export function NavigationItem({
  children,
  id,
  className,
  onClick,
  disabled,
}: any) {
  const { setActiveTabId, activeTabId }: any = useContext(NavigationContext);
  const isActive = activeTabId === id;

  const classNames = cx(className, "gui-navigation--item", {
    "gui-active": isActive,
    "gui-disabled": disabled,
  });
  return (
    <li className={classNames} role="none">
      <button
        onClick={() => {
          onClick(id);
          setActiveTabId(id);
        }}
        disabled={disabled}
        type="button"
        role="menuitem"
        // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
        tabIndex="0"
      >
        {children}
      </button>
      {isActive && <span className="gui-navigation--active-border" />}
    </li>
  );
}
