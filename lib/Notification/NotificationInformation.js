import React from 'react';
import { node, string } from 'prop-types';
import NotificationBase from './NotificationBase';

const NotificationInformation = ({ children, className, ...rest }) => (
  <NotificationBase
    {...rest}
    className={`bg-blue-primary text-white ${className}`}
  >
    {children}
  </NotificationBase>
);

NotificationInformation.defaultProps = {
  className: ''
};

NotificationInformation.propTypes = {
  children: node.isRequired,
  className: string
};

export default NotificationInformation;
