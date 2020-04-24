import React from 'react';
import { node } from 'prop-types';

function Toolbar({ children }) {
  return <div>{children}</div>;
}

Toolbar.propTypes = {
  children: node.isRequired
};

export { Toolbar };
