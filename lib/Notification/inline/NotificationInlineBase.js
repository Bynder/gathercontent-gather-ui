import React from 'react';
import { string } from 'prop-types';
import { defaults, types } from './inlineTypes';
import Icon from '../../Icon';

/**
 * @usage
 *
 * <NotificationInlineBase>This is a warning</NotificationInlineBase>
 */
const NotificationInlineBase = ({
  children,
  className,
  iconName,
  borderColor,
  ...rest
}) => {
  return (
    <div
      role="alert"
      className={`notification text-base font-semi-bold py-half px-threeQuarter border-2 border-solid inline-flex text-neutral-20 bg-white rounded items-center shadow-large border-${borderColor} ${className}`}
      {...rest}
    >
      <Icon
        name={iconName}
        className={`text-${borderColor} mr-half`}
        defaultActiveColor={false}
      />
      <div className="notification__content w-full">{children}</div>
    </div>
  );
};

NotificationInlineBase.defaultProps = defaults;

NotificationInlineBase.propTypes = {
  ...types,
  iconName: string.isRequired,
  borderColor: string.isRequired
};

export default NotificationInlineBase;
