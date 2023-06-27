import React from 'react';
import { node, string } from 'prop-types';
import { Divider } from './Divider';

function Toolbar({ children, className, ...rest }) {
  return (
    <div
      className={`flex items-center border-0 border-b border-solid border-neutral-90 px-4 bg-white ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

Toolbar.propTypes = {
  children: node.isRequired,
  className: string
};

Toolbar.defaultProps = {
  className: ''
};

Toolbar.Divider = Divider;

export { Toolbar };
