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
  ...rest
}) {
  const classes = cx(
    'leading-4 rounded border-0 font-display font-semi-bold inline-flex items-center focus:outline-none',
    className,
    {
      'rounded-r-none mr-0 border-r': connectedRight,
      'rounded-l-none ml-0': connectedLeft,

      'text-base py-3 px-4 m-5': size && size === sizes.md,
      'text-base p-2 m-3': size && size === sizes.sm,
      'text-sm p-2 m-3': size && size === sizes.xs
    }
  );

  return (
    <button className={classes} {...rest}>
      {loading && !loaderRight && (
        <Icon name="loader16" className="pr-2" types={loaderTypes} />
      )}
      {children}
      {loading && loaderRight && (
        <Icon name="loader16" className="pl-2" types={loaderTypes} />
      )}
    </button>
  );
}

ButtonBase.propTypes = {
  ...propTypes,
  loaderTypes: arrayOf(string),
  size: oneOfType([string, bool])
};

ButtonBase.defaultProps = {
  ...defaultProps,
  loaderTypes: []
};

export { ButtonBase };
