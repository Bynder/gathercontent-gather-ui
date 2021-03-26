import * as React from 'react';
import { bool, func, string } from 'prop-types';
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
  onChange,
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
      onChange={e => {
        onChange(e);
        setValue(e.target.value);
      }}
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
  value: string,
  onChange: func
};

Input.defaultProps = {
  size: sizes.md,
  valid: false,
  invalid: false,
  enhanceNativeSupport: false,
  value: '',
  onChange() {}
};
