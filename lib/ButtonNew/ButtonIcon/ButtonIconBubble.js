import React from 'react';
import cx from 'classnames';
import { ButtonIcon } from './ButtonIcon';
import { buttonIconPropTypes, buttonIconDefaultProps } from '../common';

const ButtonIconBubble = ({ className, disabled, name, size, ...rest }) => {
  const classes = cx(
    'button-icon-bubble button-icon-contained shadow rounded-full p-3',
    className
  );

  return (
    <ButtonIcon
      name={name}
      className={classes}
      disabled={disabled}
      size={false}
      {...rest}
    />
  );
};

ButtonIconBubble.propTypes = buttonIconPropTypes;

ButtonIconBubble.defaultProps = buttonIconDefaultProps;

export default ButtonIconBubble;
