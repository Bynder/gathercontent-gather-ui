import React from 'react';
import { node } from 'prop-types';

function Toolbar({ children }) {
  return (
    <div className="border-0 border-b border-solid border-neutral-90">
      {children}
    </div>
  );
}

Toolbar.propTypes = {
  children: node.isRequired
};

export { Toolbar };
