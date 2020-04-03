import React from 'react';
import { defaults, types } from './inlineTypes';
import NotificationInlineBase from './NotificationInlineBase';

const NotificationInlineInformation = ({ children, ...rest }) => (
  <NotificationInlineBase
    iconName="infoSquare"
    borderColor="blue-primary"
    {...rest}
  >
    {children}
  </NotificationInlineBase>
);

NotificationInlineInformation.defaultProps = defaults;
NotificationInlineInformation.propTypes = types;

export default NotificationInlineInformation;
