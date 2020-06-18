import React from 'react';
import { node } from 'prop-types';

function TabName({ children }) {
  return (
    <div className="whitespace-no-wrap pr-2 overflow-hidden">{children}</div>
  );
}

TabName.propTypes = {
  children: node.isRequired
};

export { TabName };
