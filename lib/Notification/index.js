import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap/lib';
import cx from 'classnames';

/**
 * @usage
 *
 * <Notification level="warning">This is a warning</Notification>
 */
const Notification = ({ children, level, onClickHandler }) => {
  const alertClasses = cx({
    'has-click-handler': onClickHandler,
  });

  return (
    <Alert onClick={onClickHandler} bsStyle={level} className={`notification notification--${level} ${alertClasses}`}>
      <span className="notification__message">{ children }</span>
    </Alert>
  );
};

Notification.propTypes = {
  dangerousText: PropTypes.string,
  level: PropTypes.string,
  onClickHandler: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Notification;
