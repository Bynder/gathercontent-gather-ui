import React from 'react';
import { string, bool } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import Icon from '../Icon';
import { propTypes, defaultProps } from './common';

function ButtonIcon({
  children,
  className,
  disabled,
  name,
  forceActive,
  ...rest
}) {
  const classes = cx('bg-white', className, {
    'hover:bg-neutral-95 active:bg-blue-90': !disabled && !forceActive,
    'bg-blue-90': forceActive
  });

  const types = ['blue-on-button-parent-active'];

  if (forceActive) {
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
  forceActive: bool,
  name: string.isRequired
};

ButtonIcon.defaultProps = {
  ...defaultProps,
  forceActive: false
};

export { ButtonIcon };
