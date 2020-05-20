import React from 'react';
import cx from 'classnames';
import { propTypes, defaultProps, sizes } from './common';

const PillBase = ({ className, children, size, ...rest }) => {
  const classes = cx(`pill inline-flex items-center rounded ${className}`, {
    'py-1 px-3 text-base': size === sizes.md,
    'p-1 px-2 text-xs': size === sizes.xs
  });

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
};

PillBase.propTypes = propTypes;

PillBase.defaultProps = defaultProps;

export default PillBase;
