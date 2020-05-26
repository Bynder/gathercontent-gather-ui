import React from 'react';
import { node, string } from 'prop-types';
import { Item } from './TabsItem';

function Tabs({ children, className }) {
  return (
    <nav
      className={`flex border-neutral-90 border-b border-solid border-t-0 border-l-0 border-r-0 ${className}`}
    >
      {children}
    </nav>
  );
}

Tabs.Item = Item;

export { Tabs };

Tabs.propTypes = {
  children: node.isRequired,
  className: string
};

Tabs.defaultProps = {
  className: ''
};
