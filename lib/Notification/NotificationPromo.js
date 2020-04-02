import React from 'react';
import { node, string } from 'prop-types';
import NotificationBase from './NotificationBase';

const NotificationPromo = ({ children, className, ...rest }) => (
  <NotificationBase
    {...rest}
    className={`bg-purple-primary text-white ${className}`}
  >
    {children}
  </NotificationBase>
);

NotificationPromo.defaultProps = {
  className: ''
};

NotificationPromo.propTypes = {
  children: node.isRequired,
  className: string
};

export default NotificationPromo;
