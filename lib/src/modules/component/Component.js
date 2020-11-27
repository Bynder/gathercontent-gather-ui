import React from 'react';
import { ComponentHeader } from './ComponentHeader/ComponentHeader';
import { ComponentBody } from './ComponentBody';
import { ComponentFooter } from './ComponentFooter';

export function Component({
  editable,
  headerAside,
  label,
  subLabel,
  onLabelChange,
  instructions,
  onInstructionChange,
  children
}) {
  return (
    <>
      <ComponentHeader
        editable={editable}
        headerAside={headerAside}
        label={label}
        subLabel={subLabel}
        onLabelChange={onLabelChange}
        instructions={instructions}
        onInstructionChange={onInstructionChange}
      />
      <ComponentFooter editable={editable}>{children}</ComponentFooter>
    </>
  );
}

Component.Header = ComponentHeader;
Component.Body = ComponentBody;
Component.Footer = ComponentFooter;
