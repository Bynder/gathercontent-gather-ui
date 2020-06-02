import React from 'react';
import { node, string } from 'prop-types';

export function InlineSidebar({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}

InlineSidebar.propTypes = {
  children: node.isRequired,
  className: string
};

InlineSidebar.defaultProps = {
  className: ''
};
