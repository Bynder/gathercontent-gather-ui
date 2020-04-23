import React from 'react';
import { string, bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import Icon from '../Icon';
import { propTypes, defaultProps, sizes } from './common';

function ButtonIcon({
  children,
  className,
  disabled,
  name,
  active,
  size,
  ...rest
}) {
  const classes = cx(
    'p-0 bg-white flex items-center justify-center',
    className,
    {
      'hover:bg-neutral-95 active:bg-blue-90': !disabled && !active,
      'bg-blue-90': active,
      'w-8 h-8 m-2': size === sizes.md,
      'w-6 h-6 m-2': size === sizes.sm
    }
  );

  const types = ['blue-on-button-parent-active'];

  if (active) {
    types.push('primary-blue');
  }

  return (
    <ButtonBase className={classes} disabled={disabled} sized={false} {...rest}>
      <Icon name={name} types={types} />
    </ButtonBase>
  );
}

ButtonIcon.sizes = sizes;

ButtonIcon.propTypes = {
  ...propTypes,
  active: bool,
  name: string.isRequired,
  size: string
};

ButtonIcon.defaultProps = {
  ...defaultProps,
  active: false,
  size: sizes.md
};

export { ButtonIcon };
