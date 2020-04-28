import React from 'react';
import { node } from 'prop-types';
import { Divider } from './Divider';

function Toolbar({ children }) {
  return (
    <div className="flex border-0 border-b border-solid border-neutral-90 shadow px-4 py-1">
      {children}
    </div>
  );
}

Toolbar.propTypes = {
  children: node.isRequired
};

Toolbar.Divider = Divider;

export { Toolbar };
