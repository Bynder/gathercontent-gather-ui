import React from 'react';
import { node, string } from 'prop-types';
import NotificationBase from './NotificationBase';

const NotificationWarning = ({ children, className, ...rest }) => (
  <NotificationBase
    {...rest}
    className={`bg-yellow-primary text-neutral-20 ${className}`}
  >
    {children}
  </NotificationBase>
);

NotificationWarning.defaultProps = {
  className: ''
};

NotificationWarning.propTypes = {
  children: node.isRequired,
  className: string
};

export default NotificationWarning;
