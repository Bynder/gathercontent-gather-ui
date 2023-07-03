import React from "react";
import { defaults, types } from "./inlineTypes";
import NotificationInlineBase from "./NotificationInlineBase";

export function NotificationInlineWarning({
  children,
  className = "",
  ...rest
}: any) {
  return <NotificationInlineBase
    iconName="warningTriangle"
    className={`border-yellow-primary ${className}`}
    textClassName="text-yellow-primary"
    {...rest}
  >
    {children}
  </NotificationInlineBase>
}

NotificationInlineWarning.defaultProps = defaults;
NotificationInlineWarning.propTypes = types;

export default NotificationInlineWarning;
