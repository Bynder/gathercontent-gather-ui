/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';
import Icon from '../Icon';
import { propTypes, defaultProps, sizes } from './common';

const getSizeBasedClasses = size => {
  const { sm, md } = sizes;

  if (size === md) {
    return 'text-base py-threeQuarter px-base';
  }

  if (size === sm) {
    return 'text-base p-half';
  }

  return 'text-sm py-quarter px-half';
};

function ButtonBase({
  children,
  className,
  size,
  loading,
  loaderRight,
  loaderTypes,
  ...rest
}) {
  const classes = cx(
    'rounded border-0 font-display font-semi-bold inline-flex items-center',
    className,
    getSizeBasedClasses(size)
  );

  return (
    <button className={classes} {...rest}>
      {loading && !loaderRight && (
        <Icon name="loader16" className="pr-half" types={loaderTypes} />
      )}
      {children}
      {loading && loaderRight && (
        <Icon name="loader16" className="pl-half" types={loaderTypes} />
      )}
    </button>
  );
}

ButtonBase.propTypes = {
  ...propTypes,
  loaderTypes: string
};

ButtonBase.defaultProps = {
  ...defaultProps,
  loaderTypes: ''
};

export { ButtonBase };
