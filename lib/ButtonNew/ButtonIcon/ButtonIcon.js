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

function ButtonIcon({ className, disabled, name, active, size, ...rest }) {
  const nonDisabledClasses = cx(
    // 'bg-white',
    'focus:shadow-button-icon-focus',
    {
      'hover:bg-neutral-95 active:bg-blue-90': !active,
      'bg-blue-90': active
    }
  );

  const classes = cx(
    className,
    'p-0',
    'items-center justify-center',
    {
      [nonDisabledClasses]: !disabled,
      'opacity-30': disabled,
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

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      <Icon name={name} types={iconTypes} />
    </ButtonBase>
  );
}

ButtonIcon.sizes = sizes;

ButtonIcon.propTypes = buttonIconPropTypes;

ButtonIcon.defaultProps = buttonIconDefaultProps;

export { ButtonIcon };
