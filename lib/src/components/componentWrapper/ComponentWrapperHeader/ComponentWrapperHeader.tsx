import React from 'react';
import { Icon } from 'lib';
import cx from 'classnames';
import { ComponentLabel } from './ComponentLabel';
import { ComponentInstructions } from './ComponentInstructions';
import { componentStatuses } from '../ComponentWrapper';

export function ComponentWrapperHeader({
  editable,
  headerAside,
  label,
  subLabel,
  onLabelChange,
  onLabelEmpty,
  instructions,
  onInstructionChange,
  isSelected,
  isHovered,
  counter,
  status,
  maxLength,
  className,
  ...rest
}) {
  const classes = cx(`component-header ${className}`, {
    'component-header-selected': isSelected,
    'component-header-hovered': isHovered,
    'border-l-2 border-r-2 border-t-2 border-b-0 border-green-primary bg-white':
      status === componentStatuses.added,
    'border-l-2 border-r-2 border-t-2 border-b-0 border-red-primary bg-white':
      status === componentStatuses.deleted,
    'border-l-2 border-r-2 border-t-2 border-b-0 border-purple-primary bg-white':
      status === componentStatuses.movedDown ||
      status === componentStatuses.movedUp,
    'bg-white': [
      componentStatuses.active,
      componentStatuses.unchanged
    ].includes(status)
  });

  const countText = `${counter < 9 ? '0' : ''}${counter}`;

  return (
    <div className={classes} {...rest}>
      <div className="component-header-top">
        <div className="component-label">
          {counter && <span className="component-counter">{countText}</span>}
          <Icon name="component16" types={['neutral-20']} className="mr-2" />
          <ComponentLabel
            editable={editable}
            label={label}
            onChange={onLabelChange}
            onEmpty={onLabelEmpty}
            maxLength={maxLength}
          />
          {subLabel && <span className="component-sublabel">{subLabel}</span>}
        </div>
        {headerAside && (
          <div className="component-header-aside">{headerAside}</div>
        )}
      </div>
      {(instructions || editable) && (
        <ComponentInstructions
          editable={editable}
          instructions={instructions}
          onChange={onInstructionChange}
        />
      )}
    </div>
  );
}

ComponentWrapperHeader.defaultProps = {
  editable: false,
  isSelected: false,
  isHovered: false,
  className: ''
};
