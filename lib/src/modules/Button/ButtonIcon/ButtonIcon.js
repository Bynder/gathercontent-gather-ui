import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { Icon } from 'lib';
import { ButtonBase } from '../ButtonBase';
import {
  sizes,
  getSizeClasses,
  buttonIconPropTypes,
  buttonIconDefaultProps
} from '../common';

function ButtonIcon({
  className,
  disabled,
  name,
  active,
  size,
  iconTitle,
  children,
  enabled,
  defaultFillColor,
  ...rest
}) {
  const classes = cx(
    'button-icon',
    className,
    {
      'button-icon-active': !disabled && active,
      'button-icon-enabled': !disabled && enabled && !active,
      'button-icon-no-fill': !defaultFillColor,
      'rounded-small': size === sizes.sm
    },
    getSizeClasses(size)
  );

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      {!!name && (
        <Icon
          name={name}
          title={iconTitle}
          defaultActiveColor={false}
          defaultFillColor={defaultFillColor}
        />
      )}
      {children}
    </ButtonBase>
  );
}

ButtonIcon.sizes = sizes;

ButtonIcon.propTypes = {
  ...buttonIconPropTypes,
  enabled: bool
};

ButtonIcon.defaultProps = {
  ...buttonIconDefaultProps,
  enabled: false
};

export { ButtonIcon };
