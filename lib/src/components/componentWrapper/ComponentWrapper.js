import React from 'react';
import { ComponentWrapperHeader } from './ComponentWrapperHeader/ComponentWrapperHeader';
import { ComponentWrapperBody } from './ComponentWrapperBody';
import { ComponentWrapperFooter } from './ComponentWrapperFooter';

export function ComponentWrapper({
  editable,
  headerAside,
  label,
  subLabel,
  onLabelChange,
  instructions,
  onInstructionChange,
  className,
  children,
  isSelected,
  ...rest
}) {
  return (
    <div className={`component-wrapper ${className}`} {...rest}>
      <ComponentWrapperHeader
        editable={editable}
        headerAside={headerAside}
        label={label}
        subLabel={subLabel}
        onLabelChange={onLabelChange}
        instructions={instructions}
        onInstructionChange={onInstructionChange}
        isSelected={isSelected}
      />
      <ComponentWrapperFooter editable={editable} isSelected={isSelected}>
        {children}
      </ComponentWrapperFooter>
    </div>
  );
}

ComponentWrapper.Header = ComponentWrapperHeader;
ComponentWrapper.Body = ComponentWrapperBody;
ComponentWrapper.Footer = ComponentWrapperFooter;
