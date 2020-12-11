import React from 'react';
import cx from 'classnames';

export function ComponentWrapperBody({ children, editable, isSelected }) {
  const classes = cx('component-body', {
    'component-body-editable': editable,
    'component-body-selected': isSelected
  });

  return <div className={classes}>{children}</div>;
}
