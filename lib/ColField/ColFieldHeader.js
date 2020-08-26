import React from 'react';
import { node, string } from 'prop-types';

function ColFieldHeader({ children, className, ...props }) {
  return (
    <div
      className={`col-field__header border-0 py-4 px-5 border-b border-solid border-neutral-90 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

ColFieldHeader.propTypes = {
  children: node.isRequired,
  className: string
};

ColFieldHeader.defaultProps = {
  className: ''
};

export default ColFieldHeader;
