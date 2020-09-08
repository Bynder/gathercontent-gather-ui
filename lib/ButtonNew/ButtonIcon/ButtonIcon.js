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

function ButtonIcon({
  className,
  disabled,
  name,
  active,
  size,
  iconTitle,
  children,
  enabled,
  ...rest
}) {
  const nonDisabledClasses = cx(
    'bg-transparent border-transparent',
    'focus:border-blue-primary focus:shadow-button-icon-focus',
    {
      'hover:bg-neutral-95 hover:border-neutral-95': !active,
      'active:bg-blue-90 active:border-blue-90 active:shadow-none': !active,
      'button__icon-active bg-blue-90 border-blue-90': active
    }
  );

  const classes = cx(
    className,
    'button__icon',
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
    iconTypes.push('blue-on-button-parent-active');
  }

  if (active) {
    iconTypes.push('primary-blue');
  }

  if (enabled) {
    iconTypes.push('green');
  }

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      <Icon name={name} types={iconTypes} title={iconTitle} />
      {children}
    </ButtonBase>
  );
}

ButtonIcon.sizes = sizes;

ButtonIcon.propTypes = buttonIconPropTypes;

ButtonIcon.defaultProps = buttonIconDefaultProps;

export { ButtonIcon };
