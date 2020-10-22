import React from 'react';
import cx from 'classnames';
import { ButtonIcon } from 'lib';
import { buttonIconPropTypes, buttonIconDefaultProps } from '../common';

const ButtonIconBubble = ({ className, disabled, name, size, ...rest }) => {
  const classes = cx(
    'button-icon-bubble button-icon-contained rounded-full p-3',
    className
  );

  return (
    <div className="shadow rounded-full">
      <ButtonIcon
        name={name}
        className={classes}
        disabled={disabled}
        size={false}
        {...rest}
      />
    </div>
  );
};

ButtonIconBubble.propTypes = buttonIconPropTypes;

ButtonIconBubble.defaultProps = buttonIconDefaultProps;

export default ButtonIconBubble;
