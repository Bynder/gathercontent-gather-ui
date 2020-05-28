import React from 'react';
import { node, string } from 'prop-types';

export function Header({ children, className }) {
  return <header className={`${className}`}>{children}</header>;
}

Header.propTypes = {
  children: node.isRequired,
  className: string
};

Header.defaultProps = {
  className: ''
};
