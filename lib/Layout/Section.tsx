import React from 'react';
import { node, string } from 'prop-types';

export function Section({
  children,
  className,
  ...rest
}: any) {
  return (
    <div className={`layout-section ${className}`} {...rest}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: node.isRequired,
  className: string
};

Section.defaultProps = {
  className: ''
};
