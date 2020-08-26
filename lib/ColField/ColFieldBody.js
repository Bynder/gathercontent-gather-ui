import React from 'react';
import { node, string } from 'prop-types';

function ColFieldBody({ children, className, ...props }) {
  return (
    <div className={`col-field__body ${className}`} {...props}>
      {children}
    </div>
  );
}

ColFieldBody.propTypes = {
  children: node.isRequired,
  className: string
};

ColFieldBody.defaultProps = {
  className: ''
};

export default ColFieldBody;
