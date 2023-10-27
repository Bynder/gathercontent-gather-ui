import React from "react";
import cx from "classnames";
import Button from "../../Button";
import Icon from "../../Icon";
import { defaults } from "./barTypes";

/**
 * @usage
 *
 * <NotificationBarBase>This is a warning</NotificationBarBase>
 */
function NotificationBarBase({
  children,
  clickHandler,
  className,
  center,
  onClose,
  ...rest
}: any) {
  const classes = cx({
    "cursor-pointer": clickHandler,
    "text-center": center,
    flex: onClose,
    "justify-end": center && onClose,
  });

  return (
    <div
      role="button"
      onClick={clickHandler}
      onKeyPress={clickHandler}
      className={`gui-notification text-base font-semi-bold p-3 border-0 rounded-none gui-inherit-color-icon gui-inherit-color-link ${classes} ${className}`}
      tabIndex={0}
      {...rest}
    >
      <div className="gui-notification__content w-full">{children}</div>
      {onClose && (
        <Button
          onClick={onClose}
          types={["icon-only"]}
          className="gui-notification__close ml-auto"
        >
          <Icon
            name="cross"
            title="Close notification"
            defaultActiveColor={false}
          />
        </Button>
      )}
    </div>
  );
}

NotificationBarBase.defaultProps = defaults;

export default NotificationBarBase;
