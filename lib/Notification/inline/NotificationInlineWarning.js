import React from 'react';
import { defaults, types } from './inlineTypes';
import NotificationInlineBase from './NotificationInlineBase';

const NotificationInlineWarning = ({ children, ...rest }) => (
  <NotificationInlineBase
    iconName="warningTriangle"
    borderColor="yellow-primary"
    {...rest}
  >
    {children}
  </NotificationInlineBase>
);

NotificationInlineWarning.defaultProps = defaults;
NotificationInlineWarning.propTypes = types;

export default NotificationInlineWarning;
