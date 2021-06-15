import React from 'react';
import Dropdown from '../../../Dropdown';

export function WorkflowDropdownContent({ children, ...rest }) {
  return (
    <Dropdown.Content
      noTransform
      noBorder
      className="workflow-dropdown__content"
      {...rest}
    >
      {children}
    </Dropdown.Content>
  );
}
