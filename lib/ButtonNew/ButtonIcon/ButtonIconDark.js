import React from 'react';
import cx from 'classnames';
import { Icon } from 'lib';
import { ButtonBase } from '../ButtonBase';
import {
  sizes,
  getSizeClasses,
  buttonIconPropTypes,
  buttonIconDefaultProps
} from '../common';

function ButtonIconDark({
  className,
  disabled,
  name,
  active,
  size,
  iconTitle,
  children,
  ...rest
}) {
  const nonDisabledClasses = cx(
    'bg-transparent border-transparent focus:bg-neutral-40 focus:border-white focus:shadow-button-icon-dark-focus',
    {
      'active:bg-neutral-40 active:border-neutral-40 active:shadow-none hover:bg-neutral-30 hover:border-neutral-30': !active,
      'button__icon-active bg-neutral-40 border-neutral-40 hover:bg-neutral-30': active
    }
  );

  const classes = cx(
    className,
    'button__icon',
    'p-0',
    'items-center justify-center',
    {
      [nonDisabledClasses]: !disabled,
      'opacity-30 border-transparent bg-transparent': disabled,
      'rounded-small': size === sizes.sm
    },
    getSizeClasses(size)
  );

  const iconTypes = [];

  if (!disabled) {
    iconTypes.push('white-on-button-parent-active');
  }

  if (!active) {
    iconTypes.push('neutral-70');
  }

  if (active) {
    iconTypes.push('white');
  }

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      <Icon name={name} types={iconTypes} title={iconTitle} />
      {children}
    </ButtonBase>
  );
}

ButtonIconDark.sizes = sizes;

ButtonIconDark.propTypes = buttonIconPropTypes;

ButtonIconDark.defaultProps = buttonIconDefaultProps;

export { ButtonIconDark };
