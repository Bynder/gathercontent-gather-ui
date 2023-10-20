import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

export default function NotificationBlip({ className }: Props) {
  const classes = cx('notification-blip', className);
  return <div className={classes}></div>;
}