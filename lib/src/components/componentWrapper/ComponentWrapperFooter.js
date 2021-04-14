import React from 'react';
import cx from 'classnames';
import { componentStatuses } from './ComponentWrapper';

export function ComponentWrapperFooter({
  children,
  editable,
  isSelected,
  draggedOver,
  isHovered,
  className,
  status
}) {
  const classes = cx('component-footer', className, {
    'component-footer-editable': editable,
    'component-footer-dragged-over': draggedOver,
    'component-footer-selected': isSelected,
    'component-footer-hovered': isHovered,
    'bg-white border shadow': status === componentStatuses.active,
    'border-neutral-90':
      (status === componentStatuses.active ||
        status === componentStatuses.unchanged) &&
      !isHovered,
    'bg-neutral-98 border hover:bg-white hover:shadow':
      status === componentStatuses.unchanged,
    'border-l-2 border-r-2 border-t-0 border-b-2 border-2 border-green-primary bg-white':
      status === componentStatuses.added,
    'border-l-2 border-r-2 border-t-0 border-b-2  border-red-primary bg-white':
      status === componentStatuses.deleted,
    'border-l-2 border-r-2 border-t-0 border-b-2  border-purple-primary bg-white':
      status === componentStatuses.movedDown ||
      status === componentStatuses.movedUp
  });

  return <div className={classes}>{children}</div>;
}

ComponentWrapperFooter.defaultProps = {
  editable: false,
  isSelected: false,
  hovered: false,
  className: ''
};
