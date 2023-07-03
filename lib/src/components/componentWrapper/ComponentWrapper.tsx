import React from 'react';
import { ComponentWrapperHeader } from './ComponentWrapperHeader/ComponentWrapperHeader';
import { ComponentWrapperBody } from './ComponentWrapperBody';
import { ComponentWrapperFooter } from './ComponentWrapperFooter';

export const componentStatuses = {
  active: 'ACTIVE',
  added: 'ADDED',
  deleted: 'DELETED',
  movedUp: 'MOVED_UP',
  movedDown: 'MOVED_DOWN',
  unchanged: 'UNCHANGED'
};

export function ComponentWrapper({
  editable,
  headerAside,
  label,
  subLabel,
  onLabelChange,
  onLabelEmpty,
  instructions,
  onInstructionChange,
  className,
  children,
  isSelected,
  isHovered,
  counter,
  ...rest
}: any) {
  return (
    <div className={`component-wrapper ${className}`} {...rest}>
      <ComponentWrapperHeader
        editable={editable}
        headerAside={headerAside}
        label={label}
        subLabel={subLabel}
        onLabelChange={onLabelChange}
        onLabelEmpty={onLabelEmpty}
        instructions={instructions}
        onInstructionChange={onInstructionChange}
        isSelected={isSelected}
        isHovered={isHovered}
        counter={counter}
      />
      <ComponentWrapperFooter
        editable={editable}
        isSelected={isSelected}
        isHovered={isHovered}
      >
        {children}
      </ComponentWrapperFooter>
    </div>
  );
}

ComponentWrapper.Header = ComponentWrapperHeader;
ComponentWrapper.Body = ComponentWrapperBody;
ComponentWrapper.Footer = ComponentWrapperFooter;
