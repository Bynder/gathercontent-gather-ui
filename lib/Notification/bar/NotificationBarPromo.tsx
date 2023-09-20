import React from "react";
import { defaults } from "./barTypes";
import NotificationBarBase from "./NotificationBarBase";

export function NotificationBarPromo({ children, className, ...rest }: any) {
  return (
    <NotificationBarBase
      {...rest}
      className={`bg-purple-primary text-white ${className}`}
    >
      {children}
    </NotificationBarBase>
  );
}

NotificationBarPromo.defaultProps = defaults;

export default NotificationBarPromo;
