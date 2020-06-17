import React, { useContext } from 'react';
import { node, string, number } from 'prop-types';
import cx from 'classnames';
import { TabsContext } from './index';

function TabsGroup({ children, className }) {
  const { tabsLength } = useContext(TabsContext);

  const colsPerRow = tabsLength >= 8 ? 8 : tabsLength;
  const tabsClassName = cx(
    `tw grid grid-cols-${colsPerRow} border border-t-0 border-solid border-neutral-90 bg-neutral-95`,
    {
      'overflow-y-hidden': tabsLength <= 24,
      'overflow-y-scroll': tabsLength > 24
    }
  );

  return (
    <nav className={`max-h-30 ${tabsClassName} ${className}`}>{children}</nav>
  );
}

export { TabsGroup };

TabsGroup.propTypes = {
  children: node.isRequired,
  className: string,
  tabsLength: number.isRequired
};

TabsGroup.defaultProps = {
  className: ''
};
