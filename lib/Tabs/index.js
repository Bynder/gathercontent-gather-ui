import React from 'react';
import { node, string, shape } from 'prop-types';
import { Item } from './TabsItem';

function Tabs({ children, className, style }) {
  return (
    <nav className={`flex bg-neutral-95 ${className}`} style={style}>
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
