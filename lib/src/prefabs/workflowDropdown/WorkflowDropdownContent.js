import React from 'react';
import Dropdown from '../../../Dropdown';

export function WorkflowDropdownContent({ children }) {
  return (
    <Dropdown.Content
      noTransform
      noBorder
      className="workflow-dropdown__content"
    >
      {children}
    </Dropdown.Content>
  );
}
