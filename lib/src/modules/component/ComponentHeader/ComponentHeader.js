import React from 'react';
import { Icon } from 'lib';
import { ComponentLabel } from './ComponentLabel';
import { ComponentInstructions } from './ComponentInstructions';

export function ComponentHeader({
  editable,
  headerAside,
  label,
  subLabel,
  onLabelChange,
  instructions,
  onInstructionChange
}) {
  return (
    <div className="component-header">
      <div className="component-header-top">
        <div className="component-label">
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
