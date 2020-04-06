import React from 'react';
import { defaults, types } from './inlineTypes';
import NotificationInlineBase from './NotificationInlineBase';

const NotificationInlineDanger = ({ children, ...rest }) => (
  <NotificationInlineBase
    iconName="warningOctogon"
    borderColor="red-primary"
    {...rest}
  >
    {children}
  </NotificationInlineBase>
);

NotificationInlineDanger.defaultProps = defaults;
NotificationInlineDanger.propTypes = types;

export default NotificationInlineDanger;
