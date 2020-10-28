import React from 'react';
import { node, string } from 'prop-types';

export function InlineSidebar({ children, className, ...rest }) {
  return (
    <aside className={className} {...rest}>
      {children}
    </aside>
  );
}

InlineSidebar.propTypes = {
  children: node.isRequired,
  className: string
};

InlineSidebar.defaultProps = {
  className: ''
};
