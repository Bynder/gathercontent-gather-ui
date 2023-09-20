import React from "react";
import { defaults } from "./inlineTypes";
import NotificationInlineBase from "./NotificationInlineBase";

export function NotificationInlineInformation({
  children,
  className = "",
  ...rest
}: any) {
  return (
    <NotificationInlineBase
      iconName="infoSquare"
      className={`border-blue-primary ${className}`}
      textClassName="text-blue-primary"
      {...rest}
    >
      {children}
    </NotificationInlineBase>
  );
}

NotificationInlineInformation.defaultProps = defaults;

export default NotificationInlineInformation;
