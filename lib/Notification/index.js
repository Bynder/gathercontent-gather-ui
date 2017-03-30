import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';
import cx from 'classnames';

/**
 * @usage
 *
 * <Notification level="warning">This is a warning</Notification>
 */
const Notification = ({ children, level, clickHandler }) => {
  const alertClasses = cx({
    'has-click-handler': clickHandler,
  });

  return (
    <Alert
      onClick={clickHandler}
      bsStyle={level}
      className={`notification notification--${level} ${alertClasses}`}
    >
      { children }
    </Alert>
  );
};

Notification.defaultProps = {
  clickHandler() {},
};

Notification.propTypes = {
  level: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Notification;
