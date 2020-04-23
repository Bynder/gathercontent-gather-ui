/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { string, arrayOf } from 'prop-types';
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
    'rounded border-0 font-display font-semi-bold inline-flex items-center',
    className,
    {
      'rounded-r-none mr-0 border-r': connectedRight,
      'rounded-l-none ml-0': connectedLeft,
      'text-base py-4 px-5 m-5': size === sizes.md,
      'text-base p-3 m-3': size === sizes.sm,
      'text-sm py-1 px-3 m-3': size === sizes.xs
    }
  );

  return (
    <button className={classes} {...rest}>
      {loading && !loaderRight && (
        <Icon name="loader16" className="pr-3" types={loaderTypes} />
      )}
      {children}
      {loading && loaderRight && (
        <Icon name="loader16" className="pl-3" types={loaderTypes} />
      )}
    </button>
  );
}

ButtonBase.propTypes = {
  ...propTypes,
  loaderTypes: arrayOf(string)
};

ButtonBase.defaultProps = {
  ...defaultProps,
  loaderTypes: []
};

export { ButtonBase };