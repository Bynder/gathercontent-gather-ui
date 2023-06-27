import * as React from 'react';
import { SidebarSectionContext } from './SidebarSection';

export function SidebarHiddenContent({
  children
}: any) {
  const { showMore } = React.useContext(SidebarSectionContext);

  return showMore ? children : null;
}
