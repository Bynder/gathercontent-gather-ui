import * as React from 'react';
import { string } from 'prop-types';

export function Input({ id, className = '', ...rest }) {
  return <input id={id} className={`input ${className}`} {...rest} />;
}

Input.propTypes = {
  id: string.isRequired
};
