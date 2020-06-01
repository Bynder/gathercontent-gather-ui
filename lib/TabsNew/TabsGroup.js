import React from 'react';
import { node, string, number } from 'prop-types';
import cx from 'classnames';

function TabsGroup({ children, className, tabsLength }) {
  const tabsClassName = cx('flex flex-wrap w-full relative', {
    'overflow-y-hidden': tabsLength <= 24,
    'overflow-y-scroll': tabsLength > 24
  });

  return (
    <nav className={`flex max-h-30 ${tabsClassName} ${className}`}>
      {children}
    </nav>
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
