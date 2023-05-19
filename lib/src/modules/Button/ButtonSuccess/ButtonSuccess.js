import * as React from 'react';
import { ButtonBase } from '../ButtonBase';
import { defaultProps, propTypes, sizes } from '../common';

export function ButtonSuccess({ children, className = '', ref, ...rest }) {
  return (
    <ButtonBase className={`button-success ${className}`} ref={ref} {...rest}>
      {children}
    </ButtonBase>
  );
}

ButtonSuccess.propTypes = propTypes;

ButtonSuccess.defaultProps = defaultProps;

ButtonSuccess.sizes = sizes;
