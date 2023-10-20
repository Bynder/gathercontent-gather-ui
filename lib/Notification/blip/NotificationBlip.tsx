import React from 'react';
import cx from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function NotificationBlip({ children, className }: Props) {
  const classes = cx('notification-blip', className);
  return <div className={classes}>{children}</div>;
}