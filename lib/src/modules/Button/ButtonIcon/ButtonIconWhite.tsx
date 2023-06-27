import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { Icon } from 'lib';
import { ButtonBase } from '../ButtonBase';
import {
  sizes,
  getSizeClasses,
  buttonIconPropTypes,
  buttonIconDefaultProps
} from '../common';

function ButtonIconWhite({
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
  const classes = cx(
    'button-icon',
    'button-icon-white',
    className,
    {
      'rounded-small': size === sizes.sm
    },
    getSizeClasses(size)
  );

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      {!!name && (
        <Icon name={name} title={iconTitle} defaultActiveColor={false} />
      )}
      {children}
    </ButtonBase>
  );
}

ButtonIconWhite.sizes = sizes;

ButtonIconWhite.propTypes = {
  ...buttonIconPropTypes,
  enabled: bool
};

ButtonIconWhite.defaultProps = {
  ...buttonIconDefaultProps,
  enabled: false
};

export default ButtonIconWhite;
