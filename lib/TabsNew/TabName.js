import React from 'react';
import { node } from 'prop-types';

function TabName({ children, className }) {
  return (
    <div className={`whitespace-no-wrap overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

TabName.propTypes = {
  children: node.isRequired
};

export { TabName };
