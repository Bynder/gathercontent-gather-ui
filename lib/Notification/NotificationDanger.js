import React from 'react';
import { node, string } from 'prop-types';
import NotificationBase from './NotificationBase';

const NotificationDanger = ({ children, className, ...rest }) => (
  <NotificationBase
    {...rest}
    className={`bg-red-primary text-white ${className}`}
  >
    {children}
  </NotificationBase>
);

NotificationDanger.defaultProps = {
  className: ''
};

NotificationDanger.propTypes = {
  children: node.isRequired,
  className: string
};

export default NotificationDanger;
