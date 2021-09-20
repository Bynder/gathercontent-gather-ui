import React from 'react';

export function FormFieldset({ children, className, ...rest }) {
  return (
    <fieldset className={`form-fieldset ${className}`} {...rest}>
      {children}
    </fieldset>
  );
}

FormFieldset.defaultProps = {
  className: '',
};
