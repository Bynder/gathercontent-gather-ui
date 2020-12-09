import React from 'react';
import cx from 'classnames';

export function ComponentWrapperBody({ children, editable }) {
  const classes = cx('component-body', {
    'component-body-editable': editable
  });

  return <div className={classes}>{children}</div>;
}
