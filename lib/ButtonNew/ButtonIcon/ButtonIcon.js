import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import Icon from '../../Icon';
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
  contained,
  ...rest
}) {
  const classes = cx(
    'button-icon',
    className,
    {
      'button-icon-active': !disabled && active,
      'button-icon-enabled': !disabled && enabled && !active,
      'rounded-small': size === sizes.sm
    },
    getSizeClasses(size)
  );

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      <Icon
        name={name}
        title={iconTitle}
        defaultFillColor={false}
        defaultActiveColor={false}
      />
      {children}
    </ButtonBase>
  );
}

ButtonIcon.sizes = sizes;

ButtonIcon.propTypes = {
  ...buttonIconPropTypes,
  contained: bool,
  enabled: bool
};

ButtonIcon.defaultProps = {
  ...buttonIconDefaultProps,
  contained: false,
  enabled: false
};

export { ButtonIcon };
