import React from 'react';
import { string } from 'prop-types';
import { defaults, types } from './barTypes';
import NotificationBarDanger from './NotificationBarDanger';
import NotificationBarInformation from './NotificationBarInformation';
import NotificationBarPromo from './NotificationBarPromo';
import NotificationBarWarning from './NotificationBarWarning';

const NotificationBar = ({ level, children, ...rest }) => {
  const getNotificationBar = () => {
    switch (level) {
      case 'warning':
        return NotificationBarWarning;
      case 'danger':
        return NotificationBarDanger;
      case 'information':
        return NotificationBarInformation;
      case 'promo':
        return NotificationBarPromo;
      default:
        return null;
    }
  };
  const NotificationBarType = getNotificationBar();

  return <NotificationBarType {...rest}>{children}</NotificationBarType>;
};

NotificationBar.defaultProps = {
  ...defaults,
  level: 'warning'
};

NotificationBar.propTypes = {
  ...types,
  level: string
};

export default NotificationBar;
