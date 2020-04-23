import React from 'react';
import { string, bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import Icon from '../Icon';
import { propTypes, defaultProps } from './common';

function ButtonIcon({ children, className, disabled, name, active, ...rest }) {
  const classes = cx('bg-white', className, {
    'hover:bg-neutral-95 active:bg-blue-90': !disabled && !active,
    'bg-blue-90': active
  });

  const types = ['blue-on-button-parent-active'];

  if (active) {
    types.push('primary-blue');
  }

  return (
    <ButtonBase className={classes} disabled={disabled} {...rest}>
      <Icon name={name} types={types} />
    </ButtonBase>
  );
}

ButtonIcon.propTypes = {
  ...propTypes,
  active: bool,
  name: string.isRequired
};

ButtonIcon.defaultProps = {
  ...defaultProps,
  active: false
};

export { ButtonIcon };
