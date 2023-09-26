import React from "react";
import { defaults } from "./inlineTypes";
import NotificationInlineBase from "./NotificationInlineBase";

export function NotificationInlineDanger({
  children,
  className = "",
  ...rest
}: any) {
  return (
    <NotificationInlineBase
      iconName="warningOctogon"
      className={`border-red-primary ${className}`}
      textClassName="text-red-primary"
      {...rest}
    >
      {children}
    </NotificationInlineBase>
  );
}

NotificationInlineDanger.defaultProps = defaults;

export default NotificationInlineDanger;
