import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/lib/Alert';
import cx from 'classnames';

/**
 * @usage
 *
 * <Notification level="warning">This is a warning</Notification>
 */
const Notification = ({ children, level, clickHandler, className, center }) => {
  const alertClasses = cx({
    'has-click-handler': clickHandler,
    'notification--centred': center
  });

  return (
    <Alert
      onClick={clickHandler}
      bsStyle={level}
      className={`notification notification--${level} ${alertClasses} ${className}`}
    >
      {children}
    </Alert>
  );
};

Notification.defaultProps = {
  clickHandler: null,
  className: '',
  center: false
};

Notification.propTypes = {
  level: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  center: PropTypes.bool
};

export default Notification;
