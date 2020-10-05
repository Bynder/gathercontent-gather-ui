/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { string, arrayOf, bool, oneOfType } from 'prop-types';
import Icon from '../Icon';
import { propTypes, defaultProps, sizes } from './common';

function ButtonBase({
  children,
  className,
  size,
  loading,
  loaderRight,
  loaderTypes,
  connectedLeft,
  connectedRight,
  disabled,
  ...rest
}) {
  const classes = cx(
    'border border-solid leading-4 rounded font-display font-semi-bold inline-flex items-center focus:outline-none relative',
    className,
    {
      'rounded-r-none mr-0': connectedRight,
      'rounded-l-none ml-0': connectedLeft,

      'text-base py-3 px-4': size && size === sizes.md,
      'text-base p-2': size && size === sizes.sm,
      'text-sm p-05 px-2 rounded-small': size && size === sizes.xs
    }
  );

  if (typeof children === 'function') {
    return children(classes);
  }

  const loaderTypesWithDisabled = disabled ? ['dark'] : loaderTypes;

  return (
    <button className={classes} {...rest}>
      {loading && !loaderRight && (
        <Icon
          name="loader16"
          className="pr-2"
          types={loaderTypesWithDisabled}
        />
      )}
      {children}
      {loading && loaderRight && (
        <Icon
          name="loader16"
          className="pl-2"
          types={loaderTypesWithDisabled}
        />
      )}
    </button>
  );
}

ButtonBase.propTypes = {
  ...propTypes,
  disabled: bool,
  loaderTypes: arrayOf(string),
  size: oneOfType([string, bool])
};

ButtonBase.defaultProps = {
  ...defaultProps,
  loaderTypes: [],
  disabled: false
};

ButtonBase.sizes = sizes;

export { ButtonBase };
