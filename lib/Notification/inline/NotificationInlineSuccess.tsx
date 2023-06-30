import React from "react";
import { defaults, types } from "./inlineTypes";
import NotificationInlineBase from "./NotificationInlineBase";

export const NotificationInlineSuccess = ({
  children,
  className = "",
  ...rest
}: any) => (
  <NotificationInlineBase
    iconName="approved"
    className={`border-green-primary ${className}`}
    textClassName="text-green-primary"
    {...rest}
  >
    {children}
  </NotificationInlineBase>
);

NotificationInlineSuccess.defaultProps = defaults;
NotificationInlineSuccess.propTypes = types;

export default NotificationInlineSuccess;
