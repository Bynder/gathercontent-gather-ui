import React from 'react';
import cx from 'classnames';
import { bool, string } from 'prop-types';
import { ButtonIconContained, TooltipWrapper } from 'lib';

export function InventoryItem({
  isDragging,
  isDragPreview,
  iconName,
  className,
  tooltipClassName,
  tooltipText,
  tooltipPlacement,
  ...rest
}) {
  const classNames = cx(`inventory-item ${className}`, {
    'inventory-item-dragging': isDragging,
    'inventory-item-preview': isDragPreview
  });

  if (isDragging) {
    return <div className={classNames} />;
  }

  return (
    <TooltipWrapper
      id={`inventory-tooltip-${iconName}`}
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

InventoryItem.propTypes = {
  isDragging: bool,
  isDragPreview: bool,
  iconName: string.isRequired,
  tooltipClassName: string,
  tooltipText: string,
  className: string,
  tooltipPlacement: string
};

InventoryItem.defaultProps = {
  isDragging: false,
  isDragPreview: false,
  className: '',
  tooltipClassName: '',
  tooltipText: '',
  tooltipPlacement: 'right'
};
