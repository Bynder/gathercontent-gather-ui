import React from 'react';
import cx from 'classnames';

export function CheckboxInput({ checked, className, hasError, ...rest }) {
  const classes = cx(`gc-checkbox ${className}`, {
    'gc-checkbox-error': hasError
  });

  return (
    <input type="checkbox" className={classes} checked={checked} {...rest} />
  );
}
