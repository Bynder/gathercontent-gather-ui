import React from 'react';
import { string, node } from 'prop-types';
import NotificationDanger from './NotificationDanger';
import NotificationInformation from './NotificationInformation';
import NotificationPromo from './NotificationPromo';
import NotificationWarning from './NotificationWarning';

const Notification = ({ level, children, ...rest }) => {
  const getNotification = () => {
    switch (level) {
      case 'warning':
        return NotificationWarning;
      case 'danger':
        return NotificationDanger;
      case 'information':
        return NotificationInformation;
      case 'promo':
        return NotificationPromo;
      default:
        return null;
    }
  };
  const NotificationType = getNotification();
  return <NotificationType {...rest}>{children}</NotificationType>;
};

Notification.defaultProps = {
  level: 'warning'
};

Notification.propTypes = {
  level: string,
  children: node.isRequired
};

export default Notification;
