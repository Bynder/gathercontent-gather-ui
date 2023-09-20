import React from "react";
import { defaults } from "./barTypes";
import NotificationBarBase from "./NotificationBarBase";

export function NotificationBarWarning({ children, className, ...rest }: any) {
  return (
    <NotificationBarBase
      {...rest}
      className={`bg-yellow-primary text-neutral-20 ${className}`}
    >
      {children}
    </NotificationBarBase>
  );
}

NotificationBarWarning.defaultProps = defaults;

export default NotificationBarWarning;
