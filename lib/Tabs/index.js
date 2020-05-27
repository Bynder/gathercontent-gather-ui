import React from 'react';
import { node, string, shape } from 'prop-types';
import { Item } from './TabsItem';

function Tabs({ children, className, style }) {
  return (
    <nav
      className={`flex border-neutral-90 border-b border-solid border-t-0 border-l-0 border-r-0 ${className}`}
      style={style}
    >
      {children}
    </nav>
  );
}

Tabs.Item = Item;

export { Tabs };

Tabs.propTypes = {
  children: node.isRequired,
  className: string,
  style: shape({})
};

Tabs.defaultProps = {
  className: '',
  style: {}
};
