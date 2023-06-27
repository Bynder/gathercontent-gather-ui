import React from 'react';
import { defaults, types } from './inlineTypes';
import NotificationInlineBase from './NotificationInlineBase';

const NotificationInlineSuccess = ({ children, className = '', ...rest }) => (
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
