import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { defaults, types } from './inlineTypes';
import Icon from '../../Icon';

/**
 * @usage
 *
 * <NotificationInlineBase>This is a warning</NotificationInlineBase>
 */
const NotificationInlineBase = ({
  children,
  className = '',
  textClassName = '',
  iconName,
  showShadow,
  ...rest
}) => {
  const classes = cx({
    'shadow-large': showShadow
  });
  return (
    <div
      role="alert"
      className={`notification text-base font-semi-bold py-3 px-4 border-2 border-solid inline-flex text-neutral-20 bg-white rounded items-center inherit-color-icon inherit-color-link  ${classes} ${className}`}
      {...rest}
    >
      <Icon
        name={iconName}
        className={`${textClassName} mr-3`}
        defaultActiveColor={false}
      />
      <div className="notification__content w-full">{children}</div>
    </div>
  );
};

NotificationInlineBase.defaultProps = defaults;

NotificationInlineBase.propTypes = {
  ...types,
  iconName: string.isRequired
};

export default NotificationInlineBase;
