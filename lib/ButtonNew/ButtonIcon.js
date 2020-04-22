import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import Icon from '../Icon';
import { propTypes, defaultProps } from './common';

function ButtonIcon({ children, className, disabled, name, ...rest }) {
  const classes = cx('bg-white', className, {
    'text-neutral-primary': disabled,
    'text-blue-primary': !disabled,
    'hover:bg-blue-95 active:bg-blue-90': !disabled,
    'text-red-primary hover:bg-red-95 active:bg-red-90': !disabled
  });

  return (
    <ButtonBase className={classes} disabled={disabled} {...rest}>
      <Icon name={name} />
    </ButtonBase>
  );
}

ButtonIcon.propTypes = {
  ...propTypes,
  name: string.isRequired
};

ButtonIcon.defaultProps = defaultProps;

export { ButtonIcon };
