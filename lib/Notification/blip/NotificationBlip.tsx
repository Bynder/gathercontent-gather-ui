import React from "react";
import cx from "classnames";

interface Props {
  children: React.ReactNode;
  visible: boolean;
  className?: string;
}

export function NotificationBlip({ children, visible, className }: Props) {
  const classes = cx(
    'gui-notification-blip',
    visible ? 'after:opacity-1' : 'after:opacity-0',
    className,
  );
  return <div className={classes}>{children}</div>;
}
