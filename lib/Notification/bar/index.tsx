import React from "react";
import { string } from "prop-types";
import { defaults, types } from "./barTypes";
import NotificationBarDanger from "./NotificationBarDanger";
import NotificationBarInformation from "./NotificationBarInformation";
import NotificationBarPromo from "./NotificationBarPromo";
import NotificationBarWarning from "./NotificationBarWarning";

export function NotificationBar({ level, children, ...rest }: any) {
  const getNotificationBar = () => {
    switch (level) {
      case "warning":
        return NotificationBarWarning;
      case "danger":
        return NotificationBarDanger;
      case "information":
        return NotificationBarInformation;
      case "promo":
        return NotificationBarPromo;
      default:
        return null;
    }
  };
  const NotificationBarType = getNotificationBar();

  // @ts-expect-error TS(2604): JSX element type 'NotificationBarType' does not ha... Remove this comment to see the full error message
  return <NotificationBarType {...rest}>{children}</NotificationBarType>;
}

NotificationBar.defaultProps = {
  ...defaults,
  level: "warning",
};

NotificationBar.propTypes = {
  ...types,
  level: string,
};

export default NotificationBar;
