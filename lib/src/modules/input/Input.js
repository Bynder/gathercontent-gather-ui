import * as React from 'react';
import { bool, string } from 'prop-types';
import cx from 'classnames';
import { InputHelper } from './InputHelper';

export function Input({
  id,
  className = '',
  valid,
  invalid,
  enhanceNativeSupport,
  size,
  ...rest
}) {
  const classNames = cx(`input input-${size}`, className, {
    'input-native': enhanceNativeSupport,
    'input-valid': valid,
    'input-invalid': invalid
  });

  return <input id={id} className={classNames} {...rest} />;
}

Input.Helper = InputHelper;

const sizes = {
  md: 'md',
  sm: 'sm'
};

Input.sizes = sizes;

Input.propTypes = {
  id: string.isRequired,
  size: string,
  valid: bool,
  invalid: bool,
  enhanceNativeSupport: bool
};

Input.defaultProps = {
  size: sizes.md,
  valid: false,
  invalid: false,
  enhanceNativeSupport: false
};
