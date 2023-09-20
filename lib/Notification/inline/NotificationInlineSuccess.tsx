import React from "react";
import { defaults } from "./inlineTypes";
import NotificationInlineBase from "./NotificationInlineBase";

export function NotificationInlineSuccess({
  children,
  className = "",
  ...rest
}: any) {
  return (
    <NotificationInlineBase
      iconName="approved"
      className={`border-green-primary ${className}`}
      textClassName="text-green-primary"
      {...rest}
    >
      {children}
    </NotificationInlineBase>
  );
}

NotificationInlineSuccess.defaultProps = defaults;

export default NotificationInlineSuccess;
