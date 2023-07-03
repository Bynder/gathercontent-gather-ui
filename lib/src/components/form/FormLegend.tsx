import React from 'react';

export function FormLegend({
  children,
  className,
  ...rest
}: any) {
  return (
    <legend className={`form-legend ${className}`} {...rest}>
      {children}
    </legend>
  );
}

FormLegend.defaultProps = {
  className: ''
};
