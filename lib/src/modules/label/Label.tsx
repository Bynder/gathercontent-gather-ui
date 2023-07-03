import * as React from 'react';
import { string } from 'prop-types';

export function Label({
  htmlFor,
  children,
  className = '',
  ...rest
}: any) {
  return (
    <label className={`label ${className}`} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: string.isRequired
};
