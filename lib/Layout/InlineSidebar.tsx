import React from 'react';
import { node, string, bool } from 'prop-types';
import cx from 'classnames';

export function InlineSidebar({
  children,
  className,
  isFinder,
  ...rest
}: any) {
  const classNames = cx(`inline-sidebar ${className}`, {
    'inline-sidebar-finder': isFinder
  });

  return (
    <aside className={classNames} {...rest}>
      {children}
    </aside>
  );
}

InlineSidebar.propTypes = {
  children: node.isRequired,
  className: string,
  isFinder: bool
};

InlineSidebar.defaultProps = {
  className: '',
  isFinder: false
};
