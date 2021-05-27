import React from 'react';
import Dropdown from '../../../Dropdown';

export function WorkflowDropdownContent({ children }) {
  return (
    <Dropdown.Content className="workflow-dropdown__content">
      {children}
    </Dropdown.Content>
  );
}
