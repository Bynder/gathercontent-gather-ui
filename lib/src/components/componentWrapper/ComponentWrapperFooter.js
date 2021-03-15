import React from 'react';
import cx from 'classnames';

export function ComponentWrapperFooter({
  children,
  editable,
  isSelected,
  hovered,
  className
}) {
  const classes = cx('component-footer', className, {
    'component-footer-editable': editable,
    'component-footer-hovered': hovered,
    'component-footer-selected': isSelected
  });

  return <div className={classes}>{children}</div>;
}

ComponentWrapperFooter.defaultProps = {
  editable: false,
  isSelected: false,
  hovered: false,
  className: ''
};
