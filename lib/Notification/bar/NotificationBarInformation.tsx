import React from "react";
import { defaults, types } from "./barTypes";
import NotificationBarBase from "./NotificationBarBase";

export function NotificationBarInformation({
  children,
  className,
  ...rest
}: any) {
  return <NotificationBarBase
    {...rest}
    className={`bg-blue-primary text-white ${className}`}
  >
    {children}
  </NotificationBarBase>
}

NotificationBarInformation.defaultProps = defaults;

NotificationBarInformation.propTypes = types;

export default NotificationBarInformation;
