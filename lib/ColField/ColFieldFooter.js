import React from 'react';
import { node, string } from 'prop-types';

function ColFieldFooter({ children, className, ...props }) {
  return (
    <div
      className={`col-field__footer border-0 border-t border-solid border-neutral-90 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

ColFieldFooter.propTypes = {
  children: node.isRequired,
  className: string
};

ColFieldFooter.defaultProps = {
  className: ''
};

export default ColFieldFooter;
