import React from "react";
import { ButtonIcon } from "lib";
import cx from "classnames";
import { buttonIconDefaultProps } from "../common";

export function ButtonIconBubble({
  className,
  disabled,
  name,
  size,
  ...rest
}: any) {
  const classes = cx(
    "button-icon-bubble button-icon-contained rounded-full p-3",
    className,
    {
      shadow: !rest.active,
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
}

ButtonIconBubble.defaultProps = buttonIconDefaultProps;

export default ButtonIconBubble;
