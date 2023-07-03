import React from "react";
import { defaults, types } from "./barTypes";
import NotificationBarBase from "./NotificationBarBase";

export function NotificationBarWarning({
  children,
  className,
  ...rest
}: any) {
  return <NotificationBarBase
    {...rest}
    className={`bg-yellow-primary text-neutral-20 ${className}`}
  >
    {children}
  </NotificationBarBase>
}

NotificationBarWarning.defaultProps = defaults;

NotificationBarWarning.propTypes = types;

export default NotificationBarWarning;
