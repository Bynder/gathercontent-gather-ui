import React from 'react';
import { node, string, number } from 'prop-types';
import cx from 'classnames';

function TabsGroup({ children, className, maxNumberOfVisibleRows }) {
  const numberOfRows = children.length;

  const tabsClassName = cx('tab-group', {
    'max-h-30': maxNumberOfVisibleRows === 3,
    'overflow-y-hidden': numberOfRows <= maxNumberOfVisibleRows,
    'overflow-y-scroll': numberOfRows > maxNumberOfVisibleRows
  });

  return <nav className={`${tabsClassName} ${className}`}>{children}</nav>;
}

export { TabsGroup };

TabsGroup.propTypes = {
  children: node.isRequired,
  className: string,
  maxNumberOfVisibleRows: number
};

TabsGroup.defaultProps = {
  className: '',
  maxNumberOfVisibleRows: 3
};
