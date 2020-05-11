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
  const classes = cx(
    'p-0 bg-white flex items-center justify-center focus:shadow-blue-focus-sm',
    className,
    {
      'hover:bg-neutral-95 active:bg-blue-90': !disabled && !active,
      'opacity-50': disabled,
      'bg-blue-90': active
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
