import React from "react";
import cx from "classnames";
import { Icon } from "lib";

export function OptionMenuItem({
  children,
  meta,
  active,
  danger,
  className,
  ...rest
}: any) {
  const classes = cx(`gui-option-menu-item ${className}`, {
    "gui-option-menu-item-active": active,
    "gui-option-menu-item-danger": danger,
    "gui-option-menu-item-has-meta": !!meta,
  });

  return (
    <button
      className={classes}
      role="option"
      aria-selected={active}
      type="button"
      {...rest}
    >
      <div className="gui-option-menu-item-content">{children}</div>
      {active && (
        <Icon
          name="tick16"
          types={["primary-blue"]}
          className="gui-option-menu-item-tick"
        />
      )}
      {!!meta && <div className="gui-option-menu-item-meta">{meta}</div>}
    </button>
  );
}
