import React from 'react';
import cx from 'classnames';
import { componentStatuses } from './ComponentWrapper';

export function ComponentWrapperBody({
  children,
  editable,
  isSelected,
  isHovered,
  draggedOver,
  status
}) {
  const classes = cx('component-body', {
    'component-body-editable': editable,
    'component-body-dragged-over': draggedOver,
    'component-body-selected': isSelected,
    'component-body-hovered': isHovered,
    'bg-white border shadow': status === componentStatuses.active,
    'border-neutral-90':
      (status === componentStatuses.active ||
        status === componentStatuses.unchanged) &&
      !isHovered,
    'bg-neutral-98 border hover:bg-white hover:shadow':
      status === componentStatuses.unchanged,
    'border-l-2 border-r-2 border-t-0 border-b-0 border-2 border-green-primary bg-white':
      status === componentStatuses.added,
    'border-l-2 border-r-2 border-t-0 border-b-0  border-red-primary bg-white':
      status === componentStatuses.deleted,
    'border-l-2 border-r-2 border-t-0 border-b-0  border-purple-primary bg-white':
      status === componentStatuses.movedDown ||
      status === componentStatuses.movedUp
  });

  return <div className={classes}>{children}</div>;
}

ComponentWrapperBody.defaultProps = {
  editable: false,
  isSelected: false,
  draggedOver: false
};
