import React from "react";
import { defaults } from "./inlineTypes";
import NotificationInlineDanger from "./NotificationInlineDanger";
import NotificationInlineInformation from "./NotificationInlineInformation";
import NotificationInlineSuccess from "./NotificationInlineSuccess";
import NotificationInlineWarning from "./NotificationInlineWarning";

export function NotificationInline({ level, children, ...rest }: any) {
  const getInlineNotification = () => {
    switch (level) {
      case "warning":
        return NotificationInlineWarning;
      case "danger":
        return NotificationInlineDanger;
      case "information":
        return NotificationInlineInformation;
      case "success":
        return NotificationInlineSuccess;
      default:
        return null;
    }
  };
  const NotificationInlineType = getInlineNotification();

  // @ts-expect-error TS(2604): JSX element type 'NotificationInlineType' does not... Remove this comment to see the full error message
  return <NotificationInlineType {...rest}>{children}</NotificationInlineType>;
}

NotificationInline.defaultProps = {
  ...defaults,
  level: "information",
};

export default NotificationInline;
