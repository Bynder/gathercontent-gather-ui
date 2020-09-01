import React from 'react';
import { propTypes, defaultProps } from './common';

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

ColFieldHeader.propTypes = propTypes;

ColFieldHeader.defaultProps = defaultProps;

export default ColFieldHeader;
