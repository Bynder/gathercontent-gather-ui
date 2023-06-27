import React from 'react';
import { propTypes, defaultProps } from './common';

function ColFieldBody({ children, className, ...props }) {
  return (
    <div className={`col-field__body ${className}`} {...props}>
      {children}
    </div>
  );
}

ColFieldBody.propTypes = propTypes;

ColFieldBody.defaultProps = defaultProps;

export default ColFieldBody;
