import React from 'react';
import cx from 'classnames';

export function ComponentWrapperBody({
  children,
  editable,
  isSelected,
  hovered
}) {
  const classes = cx('component-body', {
    'component-body-editable': editable,
    'component-body-hovered': hovered,
    'component-body-selected': isSelected
  });

  return <div className={classes}>{children}</div>;
}

ComponentWrapperBody.defaultProps = {
  editable: false,
  isSelected: false,
  hovered: false
};
