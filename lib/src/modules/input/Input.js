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
  value,
  ...rest
}) {
  const [_value, setValue] = React.useState(value);

  const classNames = cx(`input input-${size}`, className, {
    'input-native': enhanceNativeSupport,
    'input-valid': valid,
    'input-invalid': invalid
  });

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <input
      id={id}
      value={_value}
      className={classNames}
      onChange={e => setValue(e.target.value)}
      {...rest}
    />
  );
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
  enhanceNativeSupport: bool,
  value: string
};

Input.defaultProps = {
  size: sizes.md,
  valid: false,
  invalid: false,
  enhanceNativeSupport: false,
  value: ''
};
