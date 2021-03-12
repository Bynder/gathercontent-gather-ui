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
  ...rest
}) {
  const classNames = cx('input', className, {
    'input-native': enhanceNativeSupport,
    'input-valid': valid,
    'input-invalid': invalid
  });

  return <input id={id} className={classNames} {...rest} />;
}

Input.Helper = InputHelper;

Input.propTypes = {
  valid: bool,
  invalid: bool,
  enhanceNativeSupport: bool,
  id: string.isRequired
};

Input.defaultProps = {
  valid: false,
  invalid: false,
  enhanceNativeSupport: false
};
