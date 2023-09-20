import React from "react";
import cx from "classnames";
import { ButtonIconContained, TooltipWrapper } from "lib";

export function InventoryItem({
  isPreviewActive,
  isPreview,
  iconName,
  className,
  tooltipClassName,
  tooltipText,
  tooltipPlacement,
  id,
  ...rest
}: any) {
  const classNames = cx(`inventory-item ${className}`, {
    "inventory-item-preview-active": isPreviewActive, // change classname and styles
    "inventory-item-preview": isPreview,
  });

  if (isPreviewActive) {
    return <div className={classNames} />;
  }

  return (
    <TooltipWrapper
      id={id || `inventory-tooltip-${iconName}`}
      tooltipText={tooltipText}
      placement={tooltipPlacement}
      wrapperClassName={tooltipClassName}
    >
      <ButtonIconContained
        name={iconName}
        size={ButtonIconContained.sizes.lg}
        className={classNames}
        {...rest}
      />
    </TooltipWrapper>
  );
}

InventoryItem.defaultProps = {
  isPreviewActive: false,
  isPreview: false,
  className: "",
  tooltipClassName: "",
  tooltipText: "",
  tooltipPlacement: "right",
  id: "",
};
