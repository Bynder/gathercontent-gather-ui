import * as React from 'react';
import { bool } from 'prop-types';

export function SidebarHeading({
  children,
  className = '',
  showMoreToggle,
  ...rest
}) {
  return (
    <div className={`sidebar-heading ${className}`} {...rest}>
      {children}
    </div>
  );
}

SidebarHeading.propTypes = {
  showMoreToggle: bool
};

SidebarHeading.defaultProps = {
  showMoreToggle: false
};
