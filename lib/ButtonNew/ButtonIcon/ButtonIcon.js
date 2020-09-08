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
  const nonDisabledClasses = cx('bg-transparent border-transparent', {
    'hover:bg-neutral-95 hover:border-neutral-95': !active && !enabled,
    'active:bg-blue-90 active:border-blue-90 active:shadow-none': !active,
    'button__icon-active bg-blue-90 border-blue-90 hover:bg-blue-95': active,
    'hover:bg-green-95 focus:border-green-primary focus:shadow-button-icon-enabled-focus':
      enabled && !active,
    'focus:border-blue-primary focus:shadow-button-icon-focus':
      !enabled || (enabled && active)
  });

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

  if (enabled && !active) {
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
