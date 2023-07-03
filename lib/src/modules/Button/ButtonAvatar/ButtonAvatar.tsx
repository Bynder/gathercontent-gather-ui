import React from "react";
import { string, bool } from "prop-types";
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

ButtonAvatar.propTypes = {
  initials: string.isRequired,
  url: string,
  disabled: bool,
  className: string,
  active: bool,
};

ButtonAvatar.defaultProps = {
  url: "",
  disabled: false,
  className: "",
  active: false,
};
