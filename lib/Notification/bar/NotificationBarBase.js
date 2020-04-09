import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import cx from 'classnames';
import Button from '../../Button';
import Icon from '../../Icon';
import { defaults, types } from './barTypes';

/**
 * @usage
 *
 * <NotificationBarBase>This is a warning</NotificationBarBase>
 */
const NotificationBarBase = ({
  children,
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
    'justify-end': center && onClose
  });

  return (
    <Alert
      onClick={clickHandler}
      className={`notification text-base font-semi-bold p-half border-0 rounded-none icon-inherit-color link-inherit-color ${classes} ${className}`}
      {...rest}
    >
      <div className="notification__content w-full">{children}</div>
      {onClose && (
        <Button
          onClick={onClose}
          types={['icon-only']}
          className="notification__close ml-auto"
        >
          <Icon
            name="cross"
            title="Close notification"
            defaultActiveColor={false}
          />
        </Button>
      )}
    </Alert>
  );
};

NotificationBarBase.defaultProps = defaults;

NotificationBarBase.propTypes = types;

export default NotificationBarBase;
