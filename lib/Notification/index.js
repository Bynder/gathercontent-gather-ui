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
    'bg-yellow-primary text-neutral-20': level === 'warning',
    'bg-red-primary text-white': level === 'danger',
    'bg-purple-primary text-white': level === 'tease',
    'bg-blue-primary text-white': level === 'primary',
    'bg-green-primary text-white': level === 'success',
    'bg-neutral-90 text-neutral-20': level === 'info',
    'cursor-pointer': clickHandler,
    'text-center': center,
    flex: onClose,
    'justify-end': center && onClose,
    'notification--has-close': onClose
  });

  return (
    <Alert
      onClick={clickHandler}
      bsStyle={level}
      className={`notification text-base font-semi-bold p-half notification--${level} ${alertClasses} ${className}`}
      {...rest}
    >
      <div className="notification__content w-full">{children}</div>
      {onClose && (
        <Button
          onClick={onClose}
          types={['icon-only']}
          className="notification__close ml-auto"
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
