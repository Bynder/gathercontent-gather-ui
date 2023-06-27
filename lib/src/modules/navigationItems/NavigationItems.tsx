import React from 'react';
import { func, node, string } from 'prop-types';
import { NavigationProvider } from './NavigationProvider';

export function NavigationItems({ children, onNav, defaultTabId, srLabel }) {
  return (
    <NavigationProvider onNav={onNav} defaultTabId={defaultTabId}>
      <nav className="navigation--items" aria-label={srLabel}>
        <ul role="menubar" aria-label={srLabel}>
          {children}
        </ul>
      </nav>
    </NavigationProvider>
  );
}

NavigationItems.propTypes = {
  children: node.isRequired,
  onNav: func,
  defaultTabId: string.isRequired,
  srLabel: string.isRequired
};

NavigationItems.defaultProps = {
  onNav: () => {}
};
