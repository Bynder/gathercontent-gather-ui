import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { propTypes, defaultProps } from './common';

function ColFieldHeader({ children, className, border, ...props }) {
  const classes = cx(`col-field__header border-0 py-4 px-5  ${className}`, {
    'border-b border-solid border-neutral-90': border
  });
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

ColFieldHeader.propTypes = {
  ...propTypes,
  border: bool
};

ColFieldHeader.defaultProps = {
  ...defaultProps,
  border: true
};

export default ColFieldHeader;
