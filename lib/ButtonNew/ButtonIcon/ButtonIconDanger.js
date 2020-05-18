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
  const nonDisabledClasses = cx(
    'p-0 bg-white',
    'inherit-color-icon text-red-primary',
    'items-center justify-center',
    'focus:shadow-button-icon-danger-focus',
    {
      'hover:bg-red-95 active:bg-red-90': !active,
      'bg-red-90': active
    }
  );

  const classes = cx(
    className,
    {
      [nonDisabledClasses]: !disabled,
      'opacity-50': disabled
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
