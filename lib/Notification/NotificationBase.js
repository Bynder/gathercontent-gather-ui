import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/lib/Alert';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';

/**
 * @usage
 *
 * <NotificationBase>This is a warning</NotificationBase>
 */
const NotificationBase = ({
  children,
  level,
  clickHandler,
  className,
  center,
  onClose,
  ...rest
}) => {
  const classes = cx({
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
      className={`notification text-base font-semi-bold p-half border-0 rounded-none ${classes} ${className}`}
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

NotificationBase.defaultProps = {
  clickHandler: null,
  className: '',
  center: false,
  onClose: null
};

NotificationBase.propTypes = {
  level: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  center: PropTypes.bool,
  onClose: PropTypes.func
};

export default NotificationBase;
