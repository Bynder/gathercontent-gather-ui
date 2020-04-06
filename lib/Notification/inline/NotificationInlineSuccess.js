import React from 'react';
import { defaults, types } from './inlineTypes';
import NotificationInlineBase from './NotificationInlineBase';

const NotificationInlineSuccess = ({ children, ...rest }) => (
  <NotificationInlineBase
    iconName="approved"
    borderColor="green-primary"
    {...rest}
  >
    {children}
  </NotificationInlineBase>
);

NotificationInlineSuccess.defaultProps = defaults;
NotificationInlineSuccess.propTypes = types;

export default NotificationInlineSuccess;
