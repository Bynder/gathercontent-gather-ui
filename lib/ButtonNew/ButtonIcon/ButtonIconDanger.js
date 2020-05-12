import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import Icon from '../../Icon';
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
    'p-0 bg-white flex items-center justify-center focus:shadow-red-focus-sm inherit-color-icon text-red-primary',
    className,
    {
      'hover:bg-red-95 active:bg-red-90': !disabled && !active,
      'opacity-50': disabled,
      'bg-red-90': active
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
      <Icon name={name} types={iconTypes} />
    </ButtonBase>
  );
}

ButtonIconDanger.sizes = sizes;

ButtonIconDanger.propTypes = buttonIconPropTypes;

ButtonIconDanger.defaultProps = buttonIconDefaultProps;

export { ButtonIconDanger };
