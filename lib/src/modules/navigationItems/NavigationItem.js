import React, { useContext } from 'react';
import cx from 'classnames';
import { NavigationContext } from './NavigationProvider';

export function NavigationItem({ children, id, className }) {
  const { setActiveTabId, activeTabId } = useContext(NavigationContext);
  const isActive = activeTabId === id;

  const classNames = cx(className, 'navigation--item', {
    active: isActive
  });
  return (
    <li className={classNames} role="none">
      <button
        onClick={() => setActiveTabId(id)}
        type="button"
        role="menuitem"
        tabIndex="0"
      >
        {children}
      </button>
      {isActive && <span className="navigation--active-border" />}
    </li>
  );
}
