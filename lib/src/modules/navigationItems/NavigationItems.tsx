import React from 'react';
import { func, node, string } from 'prop-types';
import { NavigationProvider } from './NavigationProvider';

export function NavigationItems({
  children,
  onNav,
  defaultTabId,
  srLabel
}: any) {
  return (
    // @ts-expect-error TS(2322): Type '{ children: Element; onNav: any; defaultTabI... Remove this comment to see the full error message
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
