import React from 'react';
import { Icon } from 'lib';
import cx from 'classnames';
import { ComponentLabel } from './ComponentLabel';
import { ComponentInstructions } from './ComponentInstructions';

export function ComponentWrapperHeader({
  editable,
  headerAside,
  label,
  subLabel,
  onLabelChange,
  instructions,
  onInstructionChange,
  isSelected,
  isHovered,
  counter
}) {
  const classes = cx('component-header', {
    'component-header-selected': isSelected,
    'component-header-hovered': isHovered
  });

  const countText = `${counter < 9 ? '0' : ''}${counter}`;

  return (
    <div className={classes}>
      <div className="component-header-top">
        <div className="component-label">
          {counter && <span className="component-counter">{countText}</span>}
          <Icon name="component16" types={['neutral-20']} className="mr-2" />
          <ComponentLabel
            editable={editable}
            label={label}
            onChange={onLabelChange}
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
