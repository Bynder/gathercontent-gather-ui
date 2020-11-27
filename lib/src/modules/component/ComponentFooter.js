import React from 'react';
import cx from 'classnames';

export function ComponentFooter({ children, editable }) {
  const classes = cx('component-footer', {
    'component-footer-editable': editable
  });

  return <div className={classes}>{children}</div>;
}
