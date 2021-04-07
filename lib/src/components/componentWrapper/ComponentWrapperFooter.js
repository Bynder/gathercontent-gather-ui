import React from 'react';
import cx from 'classnames';

export function ComponentWrapperFooter({
  children,
  editable,
  isSelected,
  draggedOver,
  isHovered,
  className
}) {
  const classes = cx('component-footer', className, {
    'component-footer-editable': editable,
    'component-footer-dragged-over': draggedOver,
    'component-footer-selected': isSelected,
    'component-footer-hovered': isHovered
  });

  return <div className={classes}>{children}</div>;
}

ComponentWrapperFooter.defaultProps = {
  editable: false,
  isSelected: false,
  hovered: false,
  className: ''
};
