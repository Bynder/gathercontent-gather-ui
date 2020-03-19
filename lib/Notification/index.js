import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/lib/Alert';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';

/**
 * @usage
 *
 * <Notification level="warning">This is a warning</Notification>
 */
const Notification = ({
  children,
  level,
  clickHandler,
  className,
  center,
  onClose,
  ...rest
}) => {
  const alertClasses = cx({
    'has-click-handler': clickHandler,
    'notification--centred': center,
    'notification--has-close': onClose
  });

  return (
    <Alert
      onClick={clickHandler}
      bsStyle={level}
      className={`notification notification--${level} ${alertClasses} ${className}`}
      {...rest}
    >
      <div className="notification__content">{children}</div>
      {onClose && (
        <Button
          onClick={onClose}
          types={['icon-only']}
          className="notification__close"
        >
          <Icon name="cross" title="Close notification" />
        </Button>
      )}
    </Alert>
  );
};

Notification.defaultProps = {
  clickHandler: null,
  className: '',
  center: false,
  onClose: null
};

Notification.propTypes = {
  level: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  center: PropTypes.bool,
  onClose: PropTypes.func
};

export default Notification;
