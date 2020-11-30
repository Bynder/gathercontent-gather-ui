import React from 'react';
import cx from 'classnames';

export function RadioInput({ checked, className, hasError, ...rest }) {
  const classes = cx(`gc-radio ${className}`, {
    'gc-radio-error': hasError
  });

  return <input type="radio" className={classes} checked={checked} {...rest} />;
}
