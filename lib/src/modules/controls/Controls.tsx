import React from 'react';
import cx from 'classnames';
import { Control } from './Control';

function Controls({
  children,
  className
}: any) {
  const classNames = cx('controls relative flex', className);

  return <div className={classNames}>{children}</div>;
}

Controls.Control = Control;

export { Controls };
