import React from 'react';
import { omit } from 'lodash';
import { string, bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import Icon from '../../Icon';
import { propTypes, defaultProps, sizes } from '../common';

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
      'bg-red-90': active,
      'w-8 h-8 m-2': size === sizes.md,
      'w-6 h-6 m-1': size === sizes.sm
    }
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
      <Icon name={name} types={iconTypes} className="fill-primary-red" />
    </ButtonBase>
  );
}

ButtonIconDanger.sizes = sizes;

ButtonIconDanger.propTypes = {
  ...omit(propTypes, 'children'),
  active: bool,
  name: string.isRequired
};

ButtonIconDanger.defaultProps = {
  ...defaultProps,
  active: false
};

export { ButtonIconDanger };
