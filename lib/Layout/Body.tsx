import React from 'react';
import { node, string } from 'prop-types';

export function Body({ children, className, ...rest }) {
  return (
    <div
      className={`layout-body ql-scroll-container relative w-full flex flex-col flex-1 min-h-0 overflow-y-auto container ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

Body.propTypes = {
  children: node.isRequired,
  className: string
};

Body.defaultProps = {
  className: ''
};
