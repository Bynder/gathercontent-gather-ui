import * as React from 'react';
import cx from 'classnames';
import { node } from 'prop-types';

export function SidebarSectionHead({
  toggle,
  children,
  className = '',
  ...rest
}) {
  const layoutClasses = cx({
    'pr-2': toggle
  });

  return (
    <div className={`sidebar-section-head ${className}`} {...rest}>
      <div className={layoutClasses}>{children}</div>

      {toggle && <div className="ml-auto">{toggle}</div>}
    </div>
  );
}

SidebarSectionHead.propTypes = {
  toggle: node
};

SidebarSectionHead.defaultProps = {
  toggle: null
};
