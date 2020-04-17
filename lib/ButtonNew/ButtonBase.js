/* eslint-disable react/button-has-type */
import React from 'react';
import { string, node } from 'prop-types';
import cx from 'classnames';

function ButtonBase({ children, className, ...rest }) {
  const classes = cx('rounded border-0', className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

ButtonBase.propTypes = {
  type: string,
  children: node.isRequired,
  size: string,
  className: string
};

ButtonBase.sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md'
};

ButtonBase.defaultProps = {
  type: 'button',
  size: ButtonBase.sizes.md,
  className: ''
};

export { ButtonBase };
