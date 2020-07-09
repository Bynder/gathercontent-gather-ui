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
    'bg-white border-white',
    'inherit-color-icon text-red-primary',
    'focus:border-red-primary focus:shadow-button-icon-danger-focus',
    {
      'active:bg-red-90 active:border-red-90 active:shadow-none': !active,
      'hover:bg-red-95 hover:border-red-95': !active,
      'bg-red-90 border-red-90': active
    }
  );

  const classes = cx(
    className,
    'p-0',
    'items-center justify-center',
    {
      [nonDisabledClasses]: !disabled,
      'opacity-30 border-transparent': disabled,
      'rounded-small': size === sizes.sm
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
