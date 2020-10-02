import React from 'react';
import { propTypes, defaultProps } from './common';

function SelectionModalColumnHeader({ children, className, ...rest }) {
  return (
    <h4
      className={`text-xs weight-semi-bold text-neutral-primary ${className}`}
      {...rest}
    >
      {children}
    </h4>
  );
}

SelectionModalColumnHeader.propTypes = propTypes;

SelectionModalColumnHeader.defaultProps = defaultProps;

export default SelectionModalColumnHeader;
