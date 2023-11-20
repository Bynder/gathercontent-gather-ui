/* eslint-disable react/button-has-type */
import React from "react";
import cx from "classnames";
import { Icon } from "lib";
import { defaultProps, sizes } from "./common";

export function ButtonBase({
  children,
  className,
  size,
  loading,
  loaderRight,
  loaderTypes,
  connectedLeft,
  connectedRight,
  disabled,
  buttonRef,
  defaultFillColor,
  ...rest
}: any) {
  const classes = cx("gui-button-base", className, {
    "gui-button-base-connected-r": connectedRight,
    "gui-button-base-connected-l": connectedLeft,

    "gui-button-base-md": size && size === sizes.md,
    "gui-button-base-sm": size && size === sizes.sm,
    "gui-button-base-xs": size && size === sizes.xs,
  });

  if (typeof children === "function") {
    return children(classes);
  }

  const loaderTypesWithDisabled = disabled ? ["dark"] : loaderTypes;
  return (
    <button className={classes} disabled={disabled} ref={buttonRef} {...rest}>
      {loading && !loaderRight && (
        <Icon
          name="loader16"
          className="pr-2"
          types={loaderTypesWithDisabled}
        />
      )}
      {children}
      {loading && loaderRight && (
        <Icon
          name="loader16"
          className="pl-2"
          types={loaderTypesWithDisabled}
        />
      )}
    </button>
  );
}

ButtonBase.defaultProps = {
  ...defaultProps,
  loaderTypes: [],
  disabled: false,
};

ButtonBase.sizes = sizes;
