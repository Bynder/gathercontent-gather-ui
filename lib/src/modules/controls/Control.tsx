import React from "react";
import cx from "classnames";
import { ButtonIconContained, ButtonIconContainedDanger } from "lib";

function Control({
  onClick,
  iconName,
  children,
  className,
  danger,
  ...buttonProps
}: any) {
  const classNames = cx("gui-control flex mr-2", className);
  const ButtonComponent = danger
    ? ButtonIconContainedDanger
    : ButtonIconContained;

  return (
    <div className={classNames}>
      {children || (
        <ButtonComponent
          name={iconName}
          onClick={onClick}
          size="sm"
          {...buttonProps}
        />
      )}
    </div>
  );
}

Control.defaultProps = {
  danger: false,
};

export { Control };
