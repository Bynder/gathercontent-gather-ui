/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { propTypes, defaultProps, sizes } from './common';

const getSizeBasedClasses = size => {
  const { sm, md } = sizes;

  if (size === md) {
    return 'text-base';
  }

  if (size === sm) {
    return 'text-base';
  }

  return 'text-sm';
};

function ButtonBase({ children, className, size, ...rest }) {
  const classes = cx(
    'rounded border-0 font-display font-semi-bold',
    className,
    getSizeBasedClasses(size)
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

ButtonBase.propTypes = propTypes;

ButtonBase.defaultProps = defaultProps;

export { ButtonBase };
