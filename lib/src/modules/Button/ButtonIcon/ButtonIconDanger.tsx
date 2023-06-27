import React from 'react';
import cx from 'classnames';
import Icon from 'lib/Icon';
import { ButtonBase } from '../ButtonBase';
import {
  sizes,
  getSizeClasses,
  buttonIconPropTypes,
  buttonIconDefaultProps
} from '../common';

function ButtonIconDanger({
  className,
  disabled,
  name,
  active,
  size,
  ...rest
}) {
  const classes = cx(
    className,
    'button-icon-danger',
    {
      'button-icon-danger-active': active,
      'button-icon-danger-sm': size === sizes.sm
    },
    getSizeClasses(size)
  );

  const iconTypes = [];

  if (!disabled) {
    iconTypes.push('red-on-button-parent-active');
  }

  if (active) {
    iconTypes.push('primary-red');
  }

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      <Icon name={name} types={iconTypes} defaultActiveColor={false} />
    </ButtonBase>
  );
}

ButtonIconDanger.sizes = sizes;

ButtonIconDanger.propTypes = buttonIconPropTypes;

ButtonIconDanger.defaultProps = buttonIconDefaultProps;

export { ButtonIconDanger };
