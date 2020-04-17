/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { propTypes, defaultProps } from './common';

function ButtonBase({ children, className, ...rest }) {
  const classes = cx('rounded border-0', className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

ButtonBase.propTypes = propTypes;

ButtonBase.defaultProps = defaultProps;

export { ButtonBase };
