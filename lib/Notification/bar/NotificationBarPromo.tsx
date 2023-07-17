import React from "react";
import { defaults, types } from "./barTypes";
import NotificationBarBase from "./NotificationBarBase";

export function NotificationBarPromo({ children, className, ...rest }: any) {
  return <NotificationBarBase
    {...rest}
    className={`bg-purple-primary text-white ${className}`}
  >
    {children}
  </NotificationBarBase>
}

NotificationBarPromo.defaultProps = defaults;

NotificationBarPromo.propTypes = types;

export default NotificationBarPromo;