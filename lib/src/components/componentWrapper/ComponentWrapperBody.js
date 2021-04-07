import React from 'react';
import cx from 'classnames';

export function ComponentWrapperBody({
  children,
  editable,
  isSelected,
  isHovered,
  draggedOver
}) {
  const classes = cx('component-body', {
    'component-body-editable': editable,
    'component-body-dragged-over': draggedOver,
    'component-body-selected': isSelected,
    'component-body-hovered': isHovered
  });

  return <div className={classes}>{children}</div>;
}

ComponentWrapperBody.defaultProps = {
  editable: false,
  isSelected: false,
  draggedOver: false
};
