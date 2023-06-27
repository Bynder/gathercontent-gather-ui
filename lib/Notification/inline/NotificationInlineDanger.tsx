import React from 'react';
import { defaults, types } from './inlineTypes';
import NotificationInlineBase from './NotificationInlineBase';

const NotificationInlineDanger = ({ children, className = '', ...rest }) => (
  <NotificationInlineBase
    iconName="warningOctogon"
    className={`border-red-primary ${className}`}
    textClassName="text-red-primary"
    {...rest}
  >
    {children}
  </NotificationInlineBase>
);

NotificationInlineDanger.defaultProps = defaults;
NotificationInlineDanger.propTypes = types;

export default NotificationInlineDanger;
