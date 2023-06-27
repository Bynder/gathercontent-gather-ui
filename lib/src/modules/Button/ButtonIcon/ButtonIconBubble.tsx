import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonIcon } from 'lib';
import cx from 'classnames';
import { buttonIconPropTypes, buttonIconDefaultProps } from '../common';

const ButtonIconBubble = ({
  className,
  disabled,
  name,
  size,
  ...rest
}: any) => {
  const classes = cx(
    'button-icon-bubble button-icon-contained rounded-full p-3',
    className,
    {
      shadow: !rest.active
    }
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
