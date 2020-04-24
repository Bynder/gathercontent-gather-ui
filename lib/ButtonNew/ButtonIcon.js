import React from 'react';
import { omit } from 'lodash';
import { string, bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import Icon from '../Icon';
import { propTypes, defaultProps, sizes } from './common';

function ButtonIcon({ className, disabled, name, active, size, ...rest }) {
  const classes = cx(
    'p-0 bg-white flex items-center justify-center focus:shadow-blue-focus-sm',
    className,
    {
      'hover:bg-neutral-95 active:bg-blue-90': !disabled && !active,
      'opacity-50': disabled,
      'bg-blue-90': active,
      'w-8 h-8 m-2': size === sizes.md,
      'w-6 h-6 m-2': size === sizes.sm
    }
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

ButtonIcon.propTypes = {
  ...omit(propTypes, 'children'),
  active: bool,
  name: string.isRequired
};

ButtonIcon.defaultProps = {
  ...defaultProps,
  active: false
};

export { ButtonIcon };
