import React from 'react';
import cx from 'classnames';

export function ComponentWrapperFooter({ children, editable, isSelected }) {
  const classes = cx('component-footer', {
    'component-footer-editable': editable,
    'component-footer-selected': isSelected
  });

  return <div className={classes}>{children}</div>;
}
