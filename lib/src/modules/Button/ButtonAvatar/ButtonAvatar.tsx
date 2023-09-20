import React from "react";
import { Avatar } from "lib";
import cx from "classnames";
import { ButtonBase } from "../ButtonBase";

export function ButtonAvatar({
  initials,
  url,
  disabled,
  className,
  active,
  ...rest
}: any) {
  const classes = cx("button-avatar", className, {
    "button-avatar-active": !disabled && active,
  });

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      <Avatar initials={initials} url={url} />
    </ButtonBase>
  );
}

ButtonAvatar.defaultProps = {
  url: "",
  disabled: false,
  className: "",
  active: false,
};
