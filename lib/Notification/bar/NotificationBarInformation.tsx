import React from "react";
import { defaults } from "./barTypes";
import NotificationBarBase from "./NotificationBarBase";

export function NotificationBarInformation({
  children,
  className,
  ...rest
}: any) {
  return (
    <NotificationBarBase
      {...rest}
      className={`bg-blue-primary text-white ${className}`}
    >
      {children}
    </NotificationBarBase>
  );
}

NotificationBarInformation.defaultProps = defaults;

export default NotificationBarInformation;
