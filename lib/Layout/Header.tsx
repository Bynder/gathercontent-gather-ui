import React from 'react';
import { node, string } from 'prop-types';

export function Header({ children, className, ...rest }) {
  return (
    <header className={`layout-header ${className}`} {...rest}>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: node.isRequired,
  className: string
};

Header.defaultProps = {
  className: ''
};
