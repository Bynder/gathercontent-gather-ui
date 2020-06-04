import React from 'react';
import { node, string } from 'prop-types';

export function InlineSidebar({ children, className }) {
  return <aside className={className}>{children}</aside>;
}

InlineSidebar.propTypes = {
  children: node.isRequired,
  className: string
};

InlineSidebar.defaultProps = {
  className: ''
};
