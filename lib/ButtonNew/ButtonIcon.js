import React, { useState } from 'react';
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
  const [active, setActive] = useState(false);

  const classes = cx('bg-white', className, {
    'hover:bg-neutral-95 active:bg-blue-90': !disabled && !forceActive,
    'bg-blue-90': forceActive
  });

  return (
    <ButtonBase
      className={classes}
      disabled={disabled}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseOut={() => setActive(false)}
      onBlur={() => setActive(false)}
      {...rest}
    >
      <Icon name={name} types={forceActive || active ? ['primary-blue'] : []} />
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
