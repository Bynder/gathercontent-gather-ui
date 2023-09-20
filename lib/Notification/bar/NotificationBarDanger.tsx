import React from "react";
import { defaults } from "./barTypes";
import NotificationBarBase from "./NotificationBarBase";

export function NotificationBarDanger({ children, className, ...rest }: any) {
  return (
    <NotificationBarBase
      {...rest}
      className={`bg-red-primary text-white ${className}`}
    >
      {children}
    </NotificationBarBase>
  );
}

NotificationBarDanger.defaultProps = defaults;

export default NotificationBarDanger;
